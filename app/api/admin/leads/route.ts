import { NextRequest, NextResponse } from "next/server";
import { listLeads, deleteLead, hasDb, type LeadType } from "../../../_lib/db";

function isAuthed(req: NextRequest): boolean {
  const cookie = req.cookies.get("admin_session")?.value;
  const expected = process.env.ADMIN_PASSWORD || "shiva2025";
  return Boolean(cookie) && cookie === expected;
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
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
  if (!isAuthed(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await req.json();
  if (typeof id !== "number") {
    return NextResponse.json({ error: "id (number) required" }, { status: 400 });
  }
  const ok = await deleteLead(id);
  if (!ok) return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
