import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function getClientIP(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);

  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(req: NextRequest) {
  const ip = getClientIP(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in 15 minutes." },
      { status: 429 }
    );
  }

  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD || "shiva2025";

  if (password === adminPassword) {
    attempts.delete(ip);
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_session", adminPassword, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
