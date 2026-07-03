import { NextRequest, NextResponse } from "next/server";

/**
 * Same-origin proxy for the Iconify icon API.
 *
 * The visitor's browser only ever talks to our own domain; we fetch the
 * icon data server-side and cache it. This removes api.iconify.design as a
 * third-party "vendor loaded without consent" flagged by the GDPR cookie
 * crawler, while keeping every icon (FlagIcon flags + <Icon> UI icons)
 * working exactly as before.
 *
 * The upstream host is hardcoded, so this can only ever reach Iconify —
 * it is not an open proxy.
 */

const UPSTREAM = "https://api.iconify.design";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const joined = path.join("/");

  // Only allow the characters Iconify uses in icon / collection paths.
  if (!/^[a-zA-Z0-9._:\-/]+$/.test(joined) || joined.includes("..")) {
    return new NextResponse("Not found", { status: 404 });
  }

  const search = req.nextUrl.search; // preserves ?icons=...&... for .json requests

  let upstream: Response;
  try {
    upstream = await fetch(`${UPSTREAM}/${joined}${search}`, {
      // Cache the upstream response so we hit Iconify at most once per icon,
      // not once per visitor.
      cache: "force-cache",
      headers: { Accept: "application/json, image/svg+xml, */*" },
    });
  } catch {
    return new NextResponse("Bad gateway", { status: 502 });
  }

  if (!upstream.ok) {
    return new NextResponse("Not found", { status: upstream.status });
  }

  const body = await upstream.arrayBuffer();
  const contentType =
    upstream.headers.get("content-type") ??
    (joined.endsWith(".svg") ? "image/svg+xml" : "application/json");

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      // Icons are immutable — cache hard at the browser and CDN edge.
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
