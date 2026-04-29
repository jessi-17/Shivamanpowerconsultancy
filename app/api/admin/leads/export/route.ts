import { NextRequest, NextResponse } from "next/server";
import { listLeads, hasDb, type LeadType } from "../../../../_lib/db";

function isAuthed(req: NextRequest): boolean {
  const cookie = req.cookies.get("admin_session")?.value;
  const expected = process.env.ADMIN_PASSWORD || "shiva2025";
  return Boolean(cookie) && cookie === expected;
}

function csvEscape(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = typeof value === "string" ? value : JSON.stringify(value);
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!hasDb) {
    return NextResponse.json({ error: "DATABASE_URL not configured" }, { status: 503 });
  }

  const url = req.nextUrl;
  const typeParam = url.searchParams.get("type") || "all";
  const allowed: (LeadType | "all")[] = ["all", "general", "employer", "newsletter"];
  const type = (allowed as string[]).includes(typeParam) ? (typeParam as LeadType | "all") : "all";
  const search = url.searchParams.get("search") || "";

  const { rows } = await listLeads({ type, search, limit: 500, offset: 0 });

  const header = ["id", "type", "name", "email", "phone", "country", "data", "created_at"];
  const lines = [header.join(",")];
  for (const row of rows) {
    lines.push(
      [
        row.id,
        row.type,
        row.name,
        row.email,
        row.phone,
        row.country,
        row.data,
        row.created_at,
      ]
        .map(csvEscape)
        .join(",")
    );
  }
  const csv = lines.join("\n");
  const filename = `leads-${type}-${new Date().toISOString().slice(0, 10)}.csv`;

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
