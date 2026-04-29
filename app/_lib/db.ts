import { neon } from "@neondatabase/serverless";

export type LeadType = "general" | "employer" | "newsletter";

export interface LeadRow {
  id: number;
  type: LeadType;
  name: string | null;
  email: string | null;
  phone: string | null;
  country: string | null;
  data: Record<string, unknown>;
  created_at: string;
}

const url = process.env.DATABASE_URL;

export const hasDb = Boolean(url);

export const sql = url ? neon(url) : null;

let initPromise: Promise<void> | null = null;

export async function ensureTables(): Promise<void> {
  if (!sql) return;
  if (!initPromise) {
    initPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id          BIGSERIAL PRIMARY KEY,
          type        TEXT NOT NULL,
          name        TEXT,
          email       TEXT,
          phone       TEXT,
          country     TEXT,
          data        JSONB NOT NULL DEFAULT '{}'::jsonb,
          created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS leads_type_idx ON leads(type)`;
      await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC)`;
    })().catch((err) => {
      initPromise = null;
      throw err;
    });
  }
  return initPromise;
}

export async function insertLead(input: {
  type: LeadType;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  country?: string | null;
  data?: Record<string, unknown>;
}): Promise<LeadRow | null> {
  if (!sql) {
    console.warn("[db] DATABASE_URL not set — lead not saved:", input.type);
    return null;
  }
  await ensureTables();
  const rows = (await sql`
    INSERT INTO leads (type, name, email, phone, country, data)
    VALUES (${input.type}, ${input.name ?? null}, ${input.email ?? null}, ${input.phone ?? null}, ${input.country ?? null}, ${JSON.stringify(input.data ?? {})}::jsonb)
    RETURNING id, type, name, email, phone, country, data, created_at
  `) as unknown as LeadRow[];
  return rows[0] ?? null;
}

export async function listLeads(opts: {
  type?: LeadType | "all";
  search?: string;
  limit?: number;
  offset?: number;
}): Promise<{ rows: LeadRow[]; total: number }> {
  if (!sql) return { rows: [], total: 0 };
  await ensureTables();

  const limit = Math.min(Math.max(opts.limit ?? 100, 1), 500);
  const offset = Math.max(opts.offset ?? 0, 0);
  const type = opts.type && opts.type !== "all" ? opts.type : null;
  const search = opts.search?.trim() || null;
  const searchLike = search ? `%${search}%` : null;

  const rows = (await sql`
    SELECT id, type, name, email, phone, country, data, created_at
    FROM leads
    WHERE (${type}::text IS NULL OR type = ${type})
      AND (
        ${searchLike}::text IS NULL
        OR name ILIKE ${searchLike}
        OR email ILIKE ${searchLike}
        OR phone ILIKE ${searchLike}
        OR country ILIKE ${searchLike}
      )
    ORDER BY created_at DESC
    LIMIT ${limit} OFFSET ${offset}
  `) as unknown as LeadRow[];

  const totalRows = (await sql`
    SELECT COUNT(*)::int AS count
    FROM leads
    WHERE (${type}::text IS NULL OR type = ${type})
      AND (
        ${searchLike}::text IS NULL
        OR name ILIKE ${searchLike}
        OR email ILIKE ${searchLike}
        OR phone ILIKE ${searchLike}
        OR country ILIKE ${searchLike}
      )
  `) as unknown as { count: number }[];

  return { rows, total: totalRows[0]?.count ?? 0 };
}

export async function deleteLead(id: number): Promise<boolean> {
  if (!sql) return false;
  await ensureTables();
  const result = (await sql`DELETE FROM leads WHERE id = ${id} RETURNING id`) as unknown as { id: number }[];
  return result.length > 0;
}
