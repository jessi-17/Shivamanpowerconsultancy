const SANGAM_COUNTRY_OPTIONS = new Set([
  "Europe", "Romania", "Gulf", "Bahrain", "Kuwait", "Oman", "Qatar", "Saudi", "UAE",
  "Poland", "Malaysia", "Hungary", "Bulgaria", "Croatia", "Serbia", "Kazakhstan",
  "West Indies", "Albania", "Bosnia", "Mauritius", "Slovakia", "Others", "Montenegero",
  "Azerbaijan", "Slovenia", "Algeria", "ITALY", "India", "Schengen", "Turkey",
  "Portulgal", "Lithuania", "Latvia", "Georgia", "Russia", "Jordan",
]);

const COUNTRY_ALIAS: Record<string, string> = {
  "saudi arabia": "Saudi",
  "saudi-arabia": "Saudi",
  "ksa": "Saudi",
  "u.a.e": "UAE",
  "uae": "UAE",
  "united arab emirates": "UAE",
  "italy": "ITALY",
  "portugal": "Portulgal",
  "europe-wide": "Europe",
  "schengen-area": "Schengen",
};

function normalizeCountry(input?: string | null): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;
  const lower = trimmed.toLowerCase();
  if (COUNTRY_ALIAS[lower]) return COUNTRY_ALIAS[lower];
  for (const opt of SANGAM_COUNTRY_OPTIONS) {
    if (opt.toLowerCase() === lower) return opt;
  }
  return null;
}

function splitName(full?: string | null): { first: string; last: string } {
  const cleaned = (full || "").trim();
  if (!cleaned) return { first: "", last: "" };
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: parts[0] };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

function normalizePhone(phone?: string | null): string | null {
  if (!phone) return null;
  const cleaned = phone.replace(/[\s\-()]/g, "").replace(/^\+/, "");
  return cleaned || null;
}

export interface SangamLeadInput {
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  country?: string | null;
  trade?: string | null;
  description?: string | null;
  comment?: string | null;
  leadSource?: string;
  extra?: Record<string, string | number | null | undefined>;
}

export interface SangamPushResult {
  ok: boolean;
  status?: number;
  message?: string;
  skipped?: boolean;
  /** Sangam's duplicate check found this email/phone already in the CRM. */
  duplicate?: boolean;
  error?: string;
}

/**
 * Send a lead to Sangam. If it doesn't get there (settings missing, token
 * rejected, Sangam down…), email an alert so a disconnect is noticed the same
 * day instead of months later. The lead itself is always in admin → Leads.
 */
export async function pushLeadToSangam(input: SangamLeadInput): Promise<SangamPushResult> {
  const result = await sendLeadToSangam(input);
  if (!result.ok) await alertSangamFailure(input, result);
  return result;
}

async function alertSangamFailure(input: SangamLeadInput, result: SangamPushResult) {
  const lead = {
    name: input.name || [input.firstName, input.lastName].filter(Boolean).join(" ") || null,
    phone: input.phone || null,
    email: input.email || null,
    country: input.country || null,
  };
  const leadsPage = "https://shivatravelconsultant.in/admin/leads";
  let key: string, subject: string, message: string;

  if (result.skipped) {
    key = "sangam-not-configured";
    subject = "Website leads are NOT reaching Sangam CRM (settings missing)";
    message =
      "SANGAM_API_URL or SANGAM_API_TOKEN is missing in Vercel, so new website leads are not being sent to Sangam. " +
      "Fix: Vercel → Settings → Environment Variables → add both (values are in Sangam: Admin → Plugins → Sangam API Integration), then redeploy. " +
      `The lead below and any later ones are saved on ${leadsPage} — add them to Sangam by hand or re-send them once fixed.`;
  } else if (result.status === 401 || /unauthori[sz]ed|token/i.test(result.error || "")) {
    key = "sangam-token-rejected";
    subject = "Website leads are NOT reaching Sangam CRM (API token rejected)";
    message =
      "Sangam rejected the website's API token — most likely someone clicked \"Generate Key\" in Sangam (Admin → Plugins → Sangam API Integration). " +
      "Fix: copy the current Token Key from that page into SANGAM_API_TOKEN in Vercel, then redeploy. " +
      `The lead below and any later ones are saved on ${leadsPage}.`;
  } else {
    key = "sangam-push-failed";
    subject = "A website lead did NOT reach Sangam CRM";
    message =
      `Sangam didn't accept this lead (${result.error || "no response"}). If this keeps happening, Sangam may be down or a field changed in Sangam. ` +
      `Please add the lead below to Sangam by hand. All leads are also on ${leadsPage}.`;
  }

  try {
    // Imported lazily so scripts that reuse this file don't need the Resend setup.
    const { sendAlert } = await import("./alertEmail");
    await sendAlert({ key, subject, message, context: { ...lead, sangamError: result.error ?? null } });
  } catch (err) {
    console.error("[sangam] couldn't send failure alert:", err);
  }
}

async function sendLeadToSangam(input: SangamLeadInput): Promise<SangamPushResult> {
  const baseUrl = process.env.SANGAM_API_URL;
  const token = process.env.SANGAM_API_TOKEN;
  const moduleName = process.env.SANGAM_MODULE || "Lead";

  if (!baseUrl || !token) {
    // Loud on purpose: a missing env var used to drop leads with no trace.
    console.warn(
      `[sangam] Lead NOT sent to Sangam: ${!baseUrl ? "SANGAM_API_URL" : "SANGAM_API_TOKEN"} is not set in this environment.`
    );
    return { ok: false, skipped: true, error: "Sangam credentials not configured" };
  }

  const { first, last } = splitName(input.name);
  const firstName = (input.firstName ?? first).trim();
  const lastName = (input.lastName ?? last).trim() || firstName || "Unknown";
  const phone = normalizePhone(input.phone);
  const country = normalizeCountry(input.country);

  const fields: Record<string, string | number> = {};
  if (firstName) fields.first_name = firstName;
  fields.last_name = lastName;
  if (input.email?.trim()) fields.email = input.email.trim();
  if (phone) fields.phone = phone;
  if (country) fields.countries_interested_in_c = country;
  if (input.trade?.trim()) fields.trade_c = input.trade.trim();
  if (input.description?.trim()) fields.description = input.description.trim();
  if (input.comment?.trim()) fields.comment = input.comment.trim();
  fields.lead_source = input.leadSource || "Web Site";
  fields.lead_status_c = "New Lead Data Only";

  if (input.extra) {
    for (const [k, v] of Object.entries(input.extra)) {
      if (v == null) continue;
      const s = String(v).trim();
      if (s) fields[k] = s;
    }
  }

  const url = `${baseUrl.replace(/\/$/, "")}/save-data`;

  // Sangam rejects the WHOLE record when one dropdown value isn't accepted —
  // e.g. the trade "Welder(Arc,Mig )": its API treats commas as multi-value
  // separators. Rather than lose the lead, move the rejected value into the
  // description and retry (a few times, in case more than one field is off).
  let result = await postToSangam(url, token, moduleName, fields);
  for (let attempt = 0; attempt < 3 && !result.ok; attempt++) {
    const bad = /Invalid values in '([a-z0-9_]+)' parameter/i.exec(result.error || "")?.[1];
    if (!bad || !(bad in fields) || bad === "last_name") break;
    const label = FIELD_LABELS[bad] || bad;
    fields.description = [fields.description, `${label}: ${fields[bad]}`].filter(Boolean).join("\n\n");
    delete fields[bad];
    console.warn(`[sangam] Sangam rejected the "${bad}" value — moved it into the description and retrying.`);
    result = await postToSangam(url, token, moduleName, fields);
  }
  return result;
}

const FIELD_LABELS: Record<string, string> = {
  trade_c: "Trade",
  countries_interested_in_c: "Country interested in",
  lead_source: "Lead source",
  lead_status_c: "Lead status",
};

/** Sangam sometimes returns `message` as an object/array (e.g. for duplicates). */
function asText(v: unknown): string | undefined {
  if (v == null || v === "") return undefined;
  return typeof v === "string" ? v : JSON.stringify(v);
}

async function postToSangam(
  url: string,
  token: string,
  moduleName: string,
  fields: Record<string, string | number>
): Promise<SangamPushResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ module_name: moduleName, field_name_list: fields }),
      signal: controller.signal,
    });

    const text = await res.text();
    let json: { status?: number; message?: unknown } = {};
    try { json = text ? JSON.parse(text) : {}; } catch { /* keep raw text below */ }
    const message = asText(json.message);

    // Duplicate check: "Record is already available with this … in CRM".
    // The person is already in Sangam, so this isn't a failure.
    if (message && /already available|duplicate/i.test(message)) {
      return { ok: true, duplicate: true, status: json.status ?? res.status, message };
    }

    if (!res.ok || (json.status && json.status >= 400)) {
      return {
        ok: false,
        status: json.status ?? res.status,
        message,
        error: message || text || `HTTP ${res.status}`,
      };
    }

    return { ok: true, status: json.status ?? res.status, message };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  } finally {
    clearTimeout(timeout);
  }
}
