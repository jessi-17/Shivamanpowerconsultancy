import { Resend } from "resend";

const ALERT_FROM = process.env.RESEND_FROM || "Shiva Manpower <onboarding@resend.dev>";
// Default: technical operator (actions the alert) + boss (visibility).
// Override with ALERT_TO env (comma-separated for multiple recipients).
const ALERT_TO = (process.env.ALERT_TO || "jaspreet.bhagat17@gmail.com,tlbhagat@gmail.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

// Simple in-memory rate limit: don't send the same alert key more than
// once per 30 minutes (per serverless instance). Prevents email storms when
// a backend is fully down and writes are failing in a loop.
const lastSent = new Map<string, number>();
const RATE_LIMIT_MS = 30 * 60 * 1000;

export interface AlertOptions {
  key: string;        // e.g. "blogs-write-failed" — used for rate limiting
  subject: string;
  message: string;
  context?: Record<string, unknown>;
}

export async function sendAlert(opts: AlertOptions): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[alert] RESEND_API_KEY not set, can't send:", opts.subject);
    return;
  }

  const now = Date.now();
  const last = lastSent.get(opts.key) || 0;
  if (now - last < RATE_LIMIT_MS) {
    console.warn(`[alert] rate-limited (${opts.key}):`, opts.subject);
    return;
  }
  lastSent.set(opts.key, now);

  const escape = (s: string) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const ctxRows = opts.context
    ? Object.entries(opts.context)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;width:140px;">${escape(k)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;font-family:monospace;font-size:12px;">${escape(JSON.stringify(v))}</td></tr>`
        )
        .join("")
    : "";

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#111;">
      <h2 style="color:#dc2626;margin-top:0;">⚠️ Site Alert</h2>
      <p style="font-size:15px;line-height:1.6;">${escape(opts.message)}</p>
      ${ctxRows ? `<table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:13px;">${ctxRows}</table>` : ""}
      <p style="color:#999;font-size:11px;margin-top:24px;">
        Fired at ${new Date().toISOString()}.<br/>
        Rate-limited: same alert key won't email again for 30 minutes.<br/>
        From: shivatravelconsultant.in admin
      </p>
    </div>
  `.trim();

  const text = [
    `⚠️ ${opts.subject}`,
    "",
    opts.message,
    "",
    opts.context ? `Context: ${JSON.stringify(opts.context, null, 2)}` : "",
    `Fired at ${new Date().toISOString()}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: ALERT_FROM,
      to: ALERT_TO.length === 1 ? ALERT_TO[0] : ALERT_TO,
      subject: `[shivatravelconsultant] ${opts.subject}`,
      html,
      text,
    });
    console.log(`[alert] sent: ${opts.subject}`);
  } catch (err) {
    console.error(`[alert] send failed:`, err);
  }
}
