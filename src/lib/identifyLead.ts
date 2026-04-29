import posthog from "posthog-js";

interface LeadFields {
  email?: string;
  phone?: string;
  name?: string;
  company?: string;
}

// Tells PostHog who the visitor is so the Persons dashboard shows email/phone
// instead of the anonymous UUID. Skips identification if we have neither a real
// email nor phone, to avoid creating synthetic person records.
export function identifyLead(fields: LeadFields) {
  const email = fields.email?.trim();
  const phone = fields.phone?.trim();
  const distinctId = email || phone;
  if (!distinctId) return;

  const props: Record<string, string> = {};
  if (email) props.email = email;
  if (phone) props.phone = phone;
  if (fields.name?.trim()) props.name = fields.name.trim();
  if (fields.company?.trim()) props.company = fields.company.trim();

  posthog.identify(distinctId, props);
}
