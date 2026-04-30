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
  error?: string;
}

export async function pushLeadToSangam(input: SangamLeadInput): Promise<SangamPushResult> {
  const baseUrl = process.env.SANGAM_API_URL;
  const token = process.env.SANGAM_API_TOKEN;
  const moduleName = process.env.SANGAM_MODULE || "Lead";

  if (!baseUrl || !token) {
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
    let json: { status?: number; message?: string } = {};
    try { json = text ? JSON.parse(text) : {}; } catch { /* keep raw text below */ }

    if (!res.ok || (json.status && json.status >= 400)) {
      return {
        ok: false,
        status: json.status ?? res.status,
        message: json.message,
        error: json.message || text || `HTTP ${res.status}`,
      };
    }

    return { ok: true, status: json.status ?? res.status, message: json.message };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  } finally {
    clearTimeout(timeout);
  }
}
