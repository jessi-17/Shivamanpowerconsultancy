import { NextResponse } from "next/server";
import { google } from "googleapis";

async function appendToSheet(data: {
  companyName: string;
  country: string;
  industry: string;
  workersNeeded: string;
  contactPerson: string;
  email: string;
  phone: string;
  message: string;
}) {
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

  const values = [[
    data.companyName,
    data.country,
    data.industry,
    data.workersNeeded,
    data.contactPerson,
    data.email,
    data.phone,
    data.message,
    new Date().toISOString(),
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "EmployerInquiries!A:I",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

export async function POST(req: Request) {
  try {
    const { companyName, country, industry, workersNeeded, contactPerson, email, phone, message } = await req.json();

    if (!companyName || !email || !contactPerson)
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });

    await appendToSheet({ companyName, country, industry, workersNeeded, contactPerson, email, phone, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("employer-inquiry error:", err);
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  }
}
