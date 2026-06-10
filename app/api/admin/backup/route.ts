import { NextRequest, NextResponse } from "next/server";
import { sql } from "../../../_lib/db";
import { timingSafeEqual } from "../../../_lib/adminAuth";

const BACKUP_TOKEN = process.env.BACKUP_TOKEN || "";

/**
 * Auth-protected GET that returns all admin content (offer, demands, blogs)
 * as a single JSON blob. Designed to be called by a GitHub Action on a
 * bi-weekly cron, which commits the response to /backups/ in the repo.
 *
 * Auth: pass `Authorization: Bearer <BACKUP_TOKEN>`. Header only — query
 * param tokens end up in access logs and browser history.
 */
export async function GET(req: NextRequest) {
  if (!BACKUP_TOKEN) {
    return NextResponse.json(
      { error: "BACKUP_TOKEN env var not configured" },
      { status: 500 }
    );
  }

  const headerToken =
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim() || "";

  if (!headerToken || !(await timingSafeEqual(headerToken, BACKUP_TOKEN))) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  if (!sql) {
    return NextResponse.json({ error: "DB not configured" }, { status: 500 });
  }

  // Pull all admin content rows
  const rows = (await sql`
    SELECT key, value, updated_at
    FROM app_state
    WHERE key IN ('offer', 'demands', 'blogs')
    ORDER BY key
  `) as { key: string; value: unknown; updated_at: string }[];

  // Also count history entries for visibility (don't include the values themselves
  // — they'd bloat the backup. Live state is what matters.)
  const historyCounts = (await sql`
    SELECT key, COUNT(*)::int AS count
    FROM app_state_history
    WHERE key IN ('offer', 'demands', 'blogs')
    GROUP BY key
  `) as { key: string; count: number }[];

  const backup = {
    backedUpAt: new Date().toISOString(),
    schemaVersion: 1,
    state: rows.reduce<Record<string, unknown>>((acc, r) => {
      acc[r.key] = { value: r.value, updatedAt: r.updated_at };
      return acc;
    }, {}),
    historyCounts: historyCounts.reduce<Record<string, number>>((acc, h) => {
      acc[h.key] = h.count;
      return acc;
    }, {}),
  };

  return NextResponse.json(backup, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
