import { NextResponse } from "next/server";
import { Resend } from "resend";
import { insertLead } from "../../_lib/db";

interface InquiryData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

async function sendNotificationEmail(data: InquiryData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[employer-inquiry] RESEND_API_KEY not set — skipping email");
    return;
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM || "Shiva Manpower <onboarding@resend.dev>";
  const to = process.env.RESEND_TO || "tlbhagat@gmail.com";

  const subject = `New Employer Inquiry — ${data.companyName} (${data.country || "Country not set"})`;

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
      <h2 style="color: #0052dc; margin-top: 0;">New Employer Inquiry</h2>
      <p style="color: #555; font-size: 14px;">Received via shivatravelconsultant.in</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 160px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escape(data.companyName)}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Contact Person</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escape(data.contactPerson)}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${escape(data.email)}">${escape(data.email)}</a></td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Phone / WhatsApp</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${escape(data.phone)}">${escape(data.phone)}</a></td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Country</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escape(data.country || "—")}</td></tr>
        <tr><td style="padding: 10px 0; vertical-align: top; font-weight: 600;">Requirements</td><td style="padding: 10px 0; white-space: pre-wrap;">${escape(data.message)}</td></tr>
      </table>
      <p style="color: #999; font-size: 12px; margin-top: 24px;">
        Received at ${new Date().toISOString()}
      </p>
    </div>
  `;

  const text = [
    `New Employer Inquiry`,
    `Company: ${data.companyName}`,
    `Contact: ${data.contactPerson}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Country: ${data.country || "—"}`,
    ``,
    `Requirements:`,
    data.message,
  ].join("\n");

  await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject,
    html,
    text,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data: InquiryData = {
      companyName: (body.companyName || "").trim(),
      contactPerson: (body.contactPerson || "").trim(),
      email: (body.email || "").trim(),
      phone: (body.phone || "").trim(),
      country: (body.country || "").trim(),
      message: (body.message || "").trim(),
    };

    if (!data.companyName || !data.contactPerson || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const [dbResult, emailResult] = await Promise.allSettled([
      insertLead({
        type: "employer",
        name: data.contactPerson,
        email: data.email,
        phone: data.phone,
        country: data.country || null,
        data: { companyName: data.companyName, message: data.message },
      }),
      sendNotificationEmail(data),
    ]);

    if (dbResult.status === "rejected") {
      console.error("[employer-inquiry] db error:", dbResult.reason);
    }
    if (emailResult.status === "rejected") {
      console.error("[employer-inquiry] email error:", emailResult.reason);
    }

    if (dbResult.status === "rejected" && emailResult.status === "rejected") {
      return NextResponse.json(
        { success: false, error: "Failed to record inquiry" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("employer-inquiry error:", err);
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
