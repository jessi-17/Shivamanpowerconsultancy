import { NextRequest, NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE_S,
  createSessionToken,
  getAdminPassword,
  isAdminRequest,
  timingSafeEqual,
} from "../../../_lib/adminAuth";

// Simple in-memory rate limiter (per serverless instance — still slows
// brute force substantially on a single warm instance).
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

function sessionCookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
    maxAge,
  };
}

/** Session check — lets the admin UI verify the httpOnly cookie server-side. */
export async function GET(req: NextRequest) {
  const authed = await isAdminRequest(req);
  return NextResponse.json(
    { authed },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIP(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again in 15 minutes." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const password = typeof body?.password === "string" ? body.password : "";

  const adminPassword = getAdminPassword();
  if (!adminPassword) {
    // Fail closed: no hardcoded fallback in production.
    return NextResponse.json(
      { error: "Admin login is not configured. Set the ADMIN_PASSWORD environment variable." },
      { status: 503 }
    );
  }

  const ok = password.length > 0 && (await timingSafeEqual(password, adminPassword));

  if (ok) {
    const token = await createSessionToken();
    if (!token) {
      return NextResponse.json(
        { error: "Session signing is not configured." },
        { status: 503 }
      );
    }
    attempts.delete(ip);
    const res = NextResponse.json({ success: true });
    res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions(SESSION_MAX_AGE_S));
    return res;
  }

  // Flat delay on failures blunts both timing analysis and rapid guessing.
  await new Promise((r) => setTimeout(r, 500));
  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(SESSION_COOKIE, "", sessionCookieOptions(0));
  return res;
}
