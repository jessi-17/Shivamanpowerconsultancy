import { sql } from "./db";

let tableInitPromise: Promise<void> | null = null;

async function ensureTable(): Promise<void> {
  if (!sql) return;
  if (!tableInitPromise) {
    tableInitPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS app_state (
          key         TEXT PRIMARY KEY,
          value       JSONB NOT NULL,
          updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
    })().catch((err) => {
      tableInitPromise = null;
      throw err;
    });
  }
  return tableInitPromise;
}

export const hasDb = Boolean(process.env.DATABASE_URL);

export async function readState<T>(key: string): Promise<T | null> {
  if (!sql) return null;
  await ensureTable();
  const rows = (await sql`SELECT value FROM app_state WHERE key = ${key}`) as { value: T }[];
  return rows[0]?.value ?? null;
}

export async function writeState<T>(key: string, value: T): Promise<void> {
  if (!sql) throw new Error("DATABASE_URL not configured");
  await ensureTable();
  await sql`
    INSERT INTO app_state (key, value, updated_at)
    VALUES (${key}, ${JSON.stringify(value)}::jsonb, NOW())
    ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()
  `;
}

export async function deleteState(key: string): Promise<void> {
  if (!sql) return;
  await ensureTable();
  await sql`DELETE FROM app_state WHERE key = ${key}`;
}
