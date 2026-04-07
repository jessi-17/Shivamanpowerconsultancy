import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware to return 410 Gone for spam URLs left over from old WordPress hack.
 * Google deindexes 410 pages much faster than 404 pages.
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

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
