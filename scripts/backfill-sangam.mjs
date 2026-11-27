// One-off: send leads that are already in the website database (admin → Leads)
// into Sangam CRM, using the exact same mapping as the live forms
// (app/_lib/sangam.ts). Sangam's "Duplicate Check" skips anyone it already has
// (same email or phone), so running this more than once is safe.
//
// Needs in .env.local: DATABASE_URL, SANGAM_API_URL, SANGAM_API_TOKEN
//
//   Preview only (sends nothing):
//     node --env-file=.env.local scripts/backfill-sangam.mjs
//   Actually send:
//     node --env-file=.env.local scripts/backfill-sangam.mjs --send
//   Options:
//     --types=general,employer        only these lead types (default: general,employer,newsletter)
//     --since=2026-06-01              only leads created on/after this date
//     --limit=5                       only the first N leads (handy for a first small run)
//     --exclude-ids=1,2               skip these lead ids (e.g. your own test submissions)
//     --ids=8,87,101                  only these lead ids (e.g. re-send ones that failed)

import { neon } from "@neondatabase/serverless";
import { pathToFileURL } from "node:url";
import path from "node:path";
import os from "node:os";
import fs from "node:fs";

const args = process.argv.slice(2);
const opt = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];
const SEND = args.includes("--send");
const TYPES = (opt("types") || "general,employer,newsletter").split(",").map((s) => s.trim()).filter(Boolean);
const SINCE = opt("since") || null;
const LIMIT = opt("limit") ? Number(opt("limit")) : null;
const EXCLUDE_IDS = new Set((opt("exclude-ids") || "").split(",").map((s) => s.trim()).filter(Boolean));
const ONLY_IDS = new Set((opt("ids") || "").split(",").map((s) => s.trim()).filter(Boolean));
const DELAY_MS = 1200; // stay well under Sangam's rate limit

for (const k of ["DATABASE_URL", "SANGAM_API_URL", "SANGAM_API_TOKEN"]) {
  if (!process.env[k]) {
    console.error(`Missing ${k} in .env.local`);
    process.exit(1);
  }
}

const { pushLeadToSangam } = await import(
  pathToFileURL(path.join(process.cwd(), "app/_lib/sangam.ts")).href
);
const sql = neon(process.env.DATABASE_URL);

const rows = await sql`
  SELECT id, type, name, email, phone, country, data, created_at
  FROM leads
  WHERE type = ANY(${TYPES}::text[])
    AND (${SINCE}::date IS NULL OR created_at >= ${SINCE}::date)
  ORDER BY created_at ASC
`;
const kept = rows.filter(
  (r) => !EXCLUDE_IDS.has(String(r.id)) && (ONLY_IDS.size === 0 || ONLY_IDS.has(String(r.id)))
);
if (EXCLUDE_IDS.size) console.log(`Skipping ${rows.length - kept.length} excluded lead(s): ${[...EXCLUDE_IDS].join(", ")}`);
const leads = LIMIT ? kept.slice(0, LIMIT) : kept;

const fmtDate = (d) => new Date(d).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
const str = (v) => (typeof v === "string" && v.trim() ? v.trim() : null);

/** Same field mapping as the live routes (submit-form, employer-inquiry, newsletter-subscribe). */
function toSangam(lead) {
  const d = lead.data || {};
  const received = `Original website enquiry date: ${fmtDate(lead.created_at)} (added to Sangam later)`;
  if (lead.type === "employer") {
    return {
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      country: lead.country,
      description: [`[Employer Inquiry]\nCompany: ${str(d.companyName) ?? ""}\n\nRequirements:\n${str(d.message) ?? ""}`, received].join("\n\n"),
      leadSource: "Web Site",
    };
  }
  if (lead.type === "newsletter") {
    return {
      name: (lead.email || "").split("@")[0],
      email: lead.email,
      description: [`Newsletter subscriber (${str(d.frequency) ?? "weekly"})`, received].join("\n\n"),
      leadSource: "Web Site",
    };
  }
  // general = main contact / enquiry form
  return {
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    country: str(d.interest) ?? lead.country,
    trade: str(d.trade),
    description: [str(d.message), str(d.experience) ? `Experience: ${str(d.experience)}` : null, received]
      .filter(Boolean)
      .join("\n\n"),
  };
}

// ---- Summary
const byType = {};
for (const l of leads) byType[l.type] = (byType[l.type] || 0) + 1;
console.log(`Leads in website database matching filters: ${leads.length}`, byType);
if (leads.length) {
  console.log(`Date range: ${fmtDate(leads[0].created_at)}  →  ${fmtDate(leads[leads.length - 1].created_at)}`);
}

if (!SEND) {
  const mask = (s) => (s ? s.replace(/^(.{2}).*(.{2})$/, "$1***$2") : s);
  console.log("\nExample of what would be sent (contact details masked here):");
  for (const l of leads.slice(0, 2)) {
    const m = toSangam(l);
    console.log(JSON.stringify({ ...m, email: mask(m.email), phone: mask(m.phone) }, null, 2));
  }
  console.log(`\nPreview only — nothing was sent. Add --send to send these ${leads.length} leads.`);
  process.exit(0);
}

// ---- Send
const logPath = path.join(os.tmpdir(), `sangam-backfill-${Date.now()}.csv`);
const log = ["lead_id,type,created_at,result,message"];
const counts = { created: 0, alreadyInSangam: 0, failed: 0 };
const failReasons = {};

for (let i = 0; i < leads.length; i++) {
  const lead = leads[i];
  let r = await pushLeadToSangam(toSangam(lead));

  // Rate limited → wait a minute and retry once
  if (!r.ok && r.status === 429) {
    console.log("Sangam rate limit hit — waiting 60s…");
    await new Promise((res) => setTimeout(res, 60_000));
    r = await pushLeadToSangam(toSangam(lead));
  }

  // Sangam sometimes returns `message` as an object/array (e.g. for duplicates), not a string.
  const raw = r.message ?? r.error ?? "";
  const msg = (typeof raw === "string" ? raw : JSON.stringify(raw))
    .replace(/[\r\n,"]+/g, " ")
    // Sangam's duplicate replies quote the email/phone — keep them out of the log file.
    .replace(/[^\s@]+@[^\s@]+/g, "[email]")
    .replace(/\+?\d[\d\s-]{6,}\d/g, "[phone]")
    .slice(0, 200);
  let result;
  // Check for duplicates first: Sangam may report a skipped duplicate with a 200 status.
  if (/duplicat|already|exist/i.test(msg)) {
    result = "already_in_sangam";
    counts.alreadyInSangam++;
  } else if (r.ok) {
    result = "created";
    counts.created++;
  } else {
    result = "failed";
    counts.failed++;
    failReasons[msg || `HTTP ${r.status}`] = (failReasons[msg || `HTTP ${r.status}`] || 0) + 1;
  }
  log.push([lead.id, lead.type, new Date(lead.created_at).toISOString(), result, `"${msg}"`].join(","));
  process.stdout.write(`\r${i + 1}/${leads.length}  created ${counts.created} · already in Sangam ${counts.alreadyInSangam} · failed ${counts.failed}   `);
  await new Promise((res) => setTimeout(res, DELAY_MS));
}

fs.writeFileSync(logPath, log.join("\n"));
console.log("\n\nDone:", counts);
if (counts.failed) console.log("Failure reasons:", failReasons);
console.log(`Per-lead log (lead ids only, no contact details): ${logPath}`);
