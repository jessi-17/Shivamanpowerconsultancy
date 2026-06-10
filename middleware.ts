import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "./app/_lib/adminAuth";

const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

/**
 * Middleware to return 410 Gone for spam URLs left over from old WordPress hack.
 * Google deindexes 410 pages much faster than 404 pages.
 * Also gates the admin area (pages + API) behind a signed session cookie.
 */
export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Gate admin API routes — everything under /api/admin/* requires a valid
  // signed session cookie. Excluded: /api/admin/auth (login itself) and
  // /api/admin/backup (uses its own BACKUP_TOKEN for the backup cron).
  if (
    pathname.startsWith("/api/admin/") &&
    !pathname.startsWith("/api/admin/auth") &&
    !pathname.startsWith("/api/admin/backup")
  ) {
    // CSRF guard: state-changing requests must come from our own origin.
    if (MUTATING_METHODS.has(request.method)) {
      const origin = request.headers.get("origin");
      const host = request.headers.get("host");
      if (origin && host && new URL(origin).host !== host) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }
    if (!(await isAdminRequest(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  // Gate admin pages: /admin is the login screen, every subpage requires a
  // valid session — unauthenticated visitors get bounced back to the login.
  if (pathname.startsWith("/admin/") && !(await isAdminRequest(request))) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Block all ?l= parameter URLs (WordPress redirect spam)
  if (search.includes("?l=") || search.includes("&l=")) {
    return new NextResponse("Gone", { status: 410 });
  }

  // Block WordPress paths
  if (
    pathname.startsWith("/wp-") ||
    pathname.endsWith(".php") ||
    pathname.startsWith("/content.php")
  ) {
    return new NextResponse("Gone", { status: 410 });
  }

  // Block known gambling/casino spam pages
  const spamPatterns = [
    "/four-slots-",
    "/pin-up-",
    "/browse-conditions-",
    "/strategies-for-",
    "/ein-aufregendes-",
    "/instructors",
  ];

  if (spamPatterns.some((pattern) => pathname.startsWith(pattern))) {
    return new NextResponse("Gone", { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  // Only run middleware on paths that could be spam — skip real assets
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo|.*\\.webp|.*\\.jpg|.*\\.png|.*\\.svg|.*\\.woff2|sitemap.xml|robots.txt).*)",
  ],
};
