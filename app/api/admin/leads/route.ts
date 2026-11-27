import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../_lib/adminAuth";
import { listLeads, deleteLead, hasDb, type LeadType } from "../../../_lib/db";

export async function GET(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  if (!hasDb) {
    return NextResponse.json(
      { error: "DATABASE_URL not configured. Add it to .env.local and restart the dev server." },
      { status: 503 }
    );
  }

  const url = req.nextUrl;
  const typeParam = url.searchParams.get("type") || "all";
  const allowed: (LeadType | "all")[] = ["all", "general", "employer", "newsletter"];
  const type = (allowed as string[]).includes(typeParam) ? (typeParam as LeadType | "all") : "all";

  const search = url.searchParams.get("search") || "";
  const limit = Number(url.searchParams.get("limit") || "100");
  const offset = Number(url.searchParams.get("offset") || "0");

  const { rows, total } = await listLeads({ type, search, limit, offset });
  return NextResponse.json({ rows, total });
}

export async function DELETE(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  const body = await req.json().catch(() => ({}));
  // BIGSERIAL ids come back from the Neon driver as strings, so the admin
  // page sends e.g. "42" — accept numeric strings as well as numbers.
  const id = Number(body?.id);
  if (!Number.isSafeInteger(id) || id <= 0) {
    return NextResponse.json({ error: "id (number) required" }, { status: 400 });
  }
  const ok = await deleteLead(id);
  if (!ok) return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
