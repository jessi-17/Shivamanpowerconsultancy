import { NextResponse } from "next/server";
import { readFile } from "../admin/credibility/store";

// Public read endpoint — consumed by MobileCredibilityStack on the homepage.
// Tagged so admin PUT can invalidate via revalidateTag("credibility").
export async function GET() {
  const data = await readFile();
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
    },
  });
}
