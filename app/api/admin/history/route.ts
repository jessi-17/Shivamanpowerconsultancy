import { NextRequest, NextResponse } from "next/server";
import { readHistory, restoreFromHistory } from "../../../_lib/contentStore";

const ALLOWED_KEYS = ["offer", "demands", "blogs"] as const;
type AllowedKey = (typeof ALLOWED_KEYS)[number];

function isAllowedKey(k: string): k is AllowedKey {
  return (ALLOWED_KEYS as readonly string[]).includes(k);
}

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (!key || !isAllowedKey(key)) {
    return NextResponse.json(
      { error: `Invalid or missing 'key' param. Must be one of: ${ALLOWED_KEYS.join(", ")}` },
      { status: 400 }
    );
  }
  const entries = await readHistory(key);
  return NextResponse.json({ key, count: entries.length, entries });
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as { historyId?: unknown };
  const id = Number(body.historyId);
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ error: "historyId required (number)" }, { status: 400 });
  }
  const ok = await restoreFromHistory(id);
  if (!ok) return NextResponse.json({ error: "history entry not found" }, { status: 404 });
  return NextResponse.json({ success: true, historyId: id });
}
