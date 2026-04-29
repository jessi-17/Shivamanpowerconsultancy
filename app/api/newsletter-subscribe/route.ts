import { NextResponse } from "next/server";
import { insertLead } from "../../_lib/db";

export async function POST(req: Request) {
  try {
    const { email, frequency } = await req.json();

    if (!email || !email.includes("@"))
      return NextResponse.json({ success: false, message: "Valid email is required" }, { status: 400 });

    const freq = frequency === "daily" ? "daily" : "weekly";

    await insertLead({
      type: "newsletter",
      email,
      data: { frequency: freq },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("newsletter-subscribe error:", err);
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  }
}
