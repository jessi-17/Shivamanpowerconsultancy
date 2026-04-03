import { NextResponse } from "next/server";
import { google } from "googleapis";

async function appendToSheet(data: { email: string; frequency: string }) {
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
    data.email,
    data.frequency,
    new Date().toISOString(),
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Newsletters!A:C",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

export async function POST(req: Request) {
  try {
    const { email, frequency } = await req.json();

    if (!email || !email.includes("@"))
      return NextResponse.json({ success: false, message: "Valid email is required" }, { status: 400 });

    const freq = frequency === "daily" ? "daily" : "weekly";

    await appendToSheet({ email, frequency: freq });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("newsletter-subscribe error:", err);
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  }
}
