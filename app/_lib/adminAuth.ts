import { NextRequest, NextResponse } from "next/server";

/**
 * Admin session auth — shared by middleware (Edge) and API routes (Node),
 * so everything here uses the Web Crypto API only.
 *
 * Instead of storing the admin password in the cookie (the old scheme),
 * we issue an HMAC-SHA256 signed token: "<expiresAtMs>.<hex signature>".
 * Stealing the cookie no longer reveals the password, tokens expire on
 * their own, and rotating ADMIN_SESSION_SECRET invalidates all sessions.
 */

export const SESSION_COOKIE = "admin_session";
export const SESSION_MAX_AGE_S = 60 * 60 * 24 * 7; // 7 days

const DEV_FALLBACK_PASSWORD = "shiva2025";

export function getAdminPassword(): string | null {
  const fromEnv = process.env.ADMIN_PASSWORD;
  if (fromEnv && fromEnv.length > 0) return fromEnv;
  // Never fall back to a hardcoded password in production — fail closed.
  if (process.env.NODE_ENV !== "production") return DEV_FALLBACK_PASSWORD;
  return null;
}

function getSessionSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (secret && secret.length >= 16) return secret;
  // Derive from the password so a missing ADMIN_SESSION_SECRET doesn't
  // brick login, but a dedicated secret is preferred.
  const pw = getAdminPassword();
  return pw ? `derived-session-secret:${pw}` : null;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function fromHex(hex: string): Uint8Array | null {
  if (!/^[0-9a-f]+$/i.test(hex) || hex.length % 2 !== 0) return null;
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export async function createSessionToken(): Promise<string | null> {
  const secret = getSessionSecret();
  if (!secret) return null;
  const expiresAt = Date.now() + SESSION_MAX_AGE_S * 1000;
  const payload = `admin.${expiresAt}`;
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload)
  );
  return `${expiresAt}.${toHex(sig)}`;
}

export async function verifySessionToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;
  const secret = getSessionSecret();
  if (!secret) return false;

  const dot = token.indexOf(".");
  if (dot <= 0) return false;
  const expiresAtStr = token.slice(0, dot);
  const sigHex = token.slice(dot + 1);

  const expiresAt = Number(expiresAtStr);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false;

  const sig = fromHex(sigHex);
  if (!sig) return false;

  const key = await hmacKey(secret);
  // crypto.subtle.verify is constant-time — no timing leak.
  return crypto.subtle.verify(
    "HMAC",
    key,
    new Uint8Array(sig),
    new TextEncoder().encode(`admin.${expiresAtStr}`)
  );
}

/** Constant-time string comparison (for password / token checks). */
export async function timingSafeEqual(a: string, b: string): Promise<boolean> {
  const enc = new TextEncoder();
  const [da, db] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(a)),
    crypto.subtle.digest("SHA-256", enc.encode(b)),
  ]);
  const ua = new Uint8Array(da);
  const ub = new Uint8Array(db);
  let diff = 0;
  for (let i = 0; i < ua.length; i++) diff |= ua[i] ^ ub[i];
  // Hash comparison hides length differences too.
  return diff === 0 && a.length === b.length;
}

export async function isAdminRequest(req: NextRequest): Promise<boolean> {
  return verifySessionToken(req.cookies.get(SESSION_COOKIE)?.value);
}

/**
 * Per-route auth guard. Middleware already gates /api/admin/*, but every
 * route checks again (defense in depth — middleware can be misconfigured
 * or bypassed, e.g. CVE-2025-29927 in older Next.js versions).
 *
 * Usage at the top of each handler:
 *   const denied = await requireAdmin(req);
 *   if (denied) return denied;
 */
export async function requireAdmin(
  req: NextRequest
): Promise<NextResponse | null> {
  if (await isAdminRequest(req)) return null;
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
