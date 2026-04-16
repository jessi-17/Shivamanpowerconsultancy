import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware to return 410 Gone for spam URLs left over from old WordPress hack.
 * Google deindexes 410 pages much faster than 404 pages.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Gate admin API routes — everything under /api/admin/* requires a valid session
  // cookie. The login endpoint itself (/api/admin/auth) is excluded so users can
  // actually log in.
  if (
    pathname.startsWith("/api/admin/") &&
    !pathname.startsWith("/api/admin/auth")
  ) {
    const session = request.cookies.get("admin_session")?.value;
    const adminPassword = process.env.ADMIN_PASSWORD || "shiva2025";
    if (!session || session !== adminPassword) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
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
