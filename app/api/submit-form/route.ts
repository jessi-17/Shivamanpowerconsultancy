import { NextResponse } from "next/server";
import { google } from "googleapis";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

async function appendToSheet({ yourname, phone, email, interest }: any) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      project_id: process.env.GOOGLE_PROJECT_ID,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
  const values = [[yourname, phone, email, interest, new Date().toISOString()]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
} 

async function sendEmail({ yourname, phone, email, interest }: any) {
  await resend.emails.send({
    from: process.env.RESEND_FROM!,
    to: process.env.RESEND_TO!,
    subject: "New form submission",
    text: `New registration:
Name: ${yourname}
Phone: ${phone}
Email: ${email}
Interest: ${interest}`,
  });
}

export async function POST(req: Request) {
  try {
    const { yourname, phone, email, interest } = await req.json();

    if (!yourname || !email)
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });

    await appendToSheet({ yourname, phone, email, interest });
    await sendEmail({ yourname, phone, email, interest });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("submit-form error:", err);
    return NextResponse.json({ success: false, error: (err as any).message }, { status: 500 });
  }
}
