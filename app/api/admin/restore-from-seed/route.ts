import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { requireAdmin } from "../../../_lib/adminAuth";
import { readState, writeState, hasDb } from "../../../_lib/contentStore";

const VALID_KEYS = ["blogs", "demands", "offer"] as const;
type ValidKey = typeof VALID_KEYS[number];

const SEED_FILES: Record<ValidKey, string> = {
  blogs: "blogs.json",
  demands: "demands.json",
  offer: "offer.json",
};

function isEmpty(value: unknown): boolean {
  if (value == null) return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value as object).length === 0;
  return false;
}

/**
 * One-shot recovery: copy seed file into Postgres for a given key.
 *
 * Body: { "key": "blogs" | "demands" | "offer", "force"?: boolean }
 *
 * - Without `force`: only restores if Postgres is currently empty/missing
 *   for that key (so it can't accidentally overwrite live data)
 * - With `force: true`: overwrites whatever is in Postgres with the seed
 */
export async function POST(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  if (!hasDb) {
    return NextResponse.json(
      { error: "DATABASE_URL not configured" },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const key = body?.key as string | undefined;
  const force = body?.force === true;

  if (!key || !VALID_KEYS.includes(key as ValidKey)) {
    return NextResponse.json(
      { error: `key must be one of: ${VALID_KEYS.join(", ")}` },
      { status: 400 }
    );
  }

  const validKey = key as ValidKey;

  // Check current state
  const current = await readState<unknown>(validKey);
  const currentEmpty = isEmpty(current);

  if (!currentEmpty && !force) {
    return NextResponse.json({
      restored: false,
      reason: "Postgres already has data for this key. Pass `force: true` to overwrite.",
      currentSize: Array.isArray(current)
        ? `${current.length} items`
        : typeof current === "object" && current !== null
          ? `${Object.keys(current).length} keys`
          : "unknown",
    });
  }

  // Read seed
  const seedPath = path.join(process.cwd(), "app/_lib/data", SEED_FILES[validKey]);
  if (!fs.existsSync(seedPath)) {
    return NextResponse.json(
      { error: `seed file not found at ${seedPath}` },
      { status: 500 }
    );
  }

  let seed: unknown;
  try {
    seed = JSON.parse(fs.readFileSync(seedPath, "utf-8"));
  } catch (err) {
    return NextResponse.json(
      { error: `failed to parse seed: ${(err as Error).message}` },
      { status: 500 }
    );
  }

  if (isEmpty(seed)) {
    return NextResponse.json({
      restored: false,
      reason: "Seed file is empty — nothing to restore",
    });
  }

  // Write seed to Postgres (this also auto-snapshots the previous value to history)
  await writeState(validKey, seed);

  const itemCount = Array.isArray(seed)
    ? seed.length
    : typeof seed === "object" && seed !== null
      ? Object.keys(seed).length
      : 1;

  return NextResponse.json({
    restored: true,
    key: validKey,
    items: itemCount,
    message: `Restored ${itemCount} items from seed to Postgres`,
  });
}
