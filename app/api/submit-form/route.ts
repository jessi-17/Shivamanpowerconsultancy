import { NextResponse } from "next/server";
import { google } from "googleapis";

async function appendToSheet(data: {
  yourname: string;
  phone: string;
  email: string;
  interest: string;
  experience: string;
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
    data.yourname,
    data.phone,
    data.email,
    data.interest,
    data.experience,
    data.message,
    new Date().toISOString(),
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

async function sendWhatsApp(phone: string, yourname: string) {
  const apiKey = process.env.GALLABOX_API_KEY;
  const channelId = process.env.GALLABOX_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.warn("Gallabox credentials not configured, skipping WhatsApp");
    return;
  }

  // Format phone: ensure it starts with country code
  let formattedPhone = phone.replace(/[\s\-()]/g, "");
  if (formattedPhone.startsWith("0")) {
    formattedPhone = "91" + formattedPhone.slice(1);
  } else if (!formattedPhone.startsWith("+") && !formattedPhone.startsWith("91")) {
    formattedPhone = "91" + formattedPhone;
  }
  formattedPhone = formattedPhone.replace("+", "");

  const res = await fetch("https://server.gallabox.com/devapi/messages/whatsapp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apiKey": apiKey,
      "apiSecret": process.env.GALLABOX_API_SECRET || "",
    },
    body: JSON.stringify({
      channelId,
      channelType: "whatsapp",
      recipient: {
        name: yourname,
        phone: formattedPhone,
      },
      whatsapp: {
        type: "text",
        text: {
          body: `Hi ${yourname}! 👋\n\nThank you for reaching out to *Shiva Travel & Manpower Consultants*! 🌍\n\nWe have received your inquiry and our team will connect with you shortly.\n\nFor immediate assistance, feel free to call us at +91 98148-20432.\n\nWarm regards,\nShiva Travel & Manpower Consultants\nNakodar, Punjab`,
        },
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Gallabox WhatsApp error:", err);
  }
}

export async function POST(req: Request) {
  try {
    const { yourname, phone, email, interest, experience, message } = await req.json();

    if (!yourname || !email)
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });

    // Save to Google Sheet
    await appendToSheet({ yourname, phone, email, interest, experience, message });

    // Send WhatsApp thank-you message via Gallabox
    if (phone) {
      await sendWhatsApp(phone, yourname).catch((err) => {
        console.error("WhatsApp send failed (non-blocking):", err);
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("submit-form error:", err);
    return NextResponse.json({ success: false, error: (err as any).message }, { status: 500 });
  }
}
