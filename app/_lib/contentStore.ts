import { sql } from "./db";
import { sendAlert } from "./alertEmail";

const MAX_HISTORY_PER_KEY = 30;

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
      await sql`
        CREATE TABLE IF NOT EXISTS app_state_history (
          id          BIGSERIAL PRIMARY KEY,
          key         TEXT NOT NULL,
          value       JSONB NOT NULL,
          created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          note        TEXT
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS app_state_history_key_idx ON app_state_history(key, created_at DESC)`;
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

export async function writeState<T>(key: string, value: T, note?: string): Promise<void> {
  if (!sql) throw new Error("DATABASE_URL not configured");
  try {
    await ensureTable();

    // Snapshot the previous value into history BEFORE overwriting (so we always
    // have a way to roll back to it). Then write the new value as the live row.
    const prev = (await sql`SELECT value FROM app_state WHERE key = ${key}`) as { value: unknown }[];
    if (prev[0]?.value !== undefined) {
      await sql`
        INSERT INTO app_state_history (key, value, note)
        VALUES (${key}, ${JSON.stringify(prev[0].value)}::jsonb, ${note ?? null})
      `;
      // Cap history per key to avoid unbounded growth
      await sql`
        DELETE FROM app_state_history
        WHERE key = ${key}
        AND id NOT IN (
          SELECT id FROM app_state_history
          WHERE key = ${key}
          ORDER BY created_at DESC
          LIMIT ${MAX_HISTORY_PER_KEY}
        )
      `;
    }

    await sql`
      INSERT INTO app_state (key, value, updated_at)
      VALUES (${key}, ${JSON.stringify(value)}::jsonb, NOW())
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()
    `;
  } catch (err) {
    // Fire alert and re-throw so the caller can show the user an error
    sendAlert({
      key: `writeState-${key}`,
      subject: `Write failed for "${key}"`,
      message: `A save to Postgres failed for key "${key}". Admin save likely returned an error to the user. Investigate immediately to prevent data loss.`,
      context: { key, error: (err as Error).message, stack: (err as Error).stack?.split("\n").slice(0, 3).join("\n") },
    }).catch(() => {});
    throw err;
  }
}

export async function deleteState(key: string): Promise<void> {
  if (!sql) return;
  await ensureTable();

  // Snapshot before delete so it can still be restored
  const prev = (await sql`SELECT value FROM app_state WHERE key = ${key}`) as { value: unknown }[];
  if (prev[0]?.value !== undefined) {
    await sql`
      INSERT INTO app_state_history (key, value, note)
      VALUES (${key}, ${JSON.stringify(prev[0].value)}::jsonb, 'before_delete')
    `;
  }

  await sql`DELETE FROM app_state WHERE key = ${key}`;
}

export interface HistoryEntry<T = unknown> {
  id: number;
  key: string;
  value: T;
  created_at: string;
  note: string | null;
}

export async function readHistory<T = unknown>(key: string, limit = 30): Promise<HistoryEntry<T>[]> {
  if (!sql) return [];
  await ensureTable();
  const rows = (await sql`
    SELECT id, key, value, created_at, note
    FROM app_state_history
    WHERE key = ${key}
    ORDER BY created_at DESC
    LIMIT ${Math.min(limit, MAX_HISTORY_PER_KEY)}
  `) as HistoryEntry<T>[];
  return rows;
}

export async function restoreFromHistory(historyId: number): Promise<boolean> {
  if (!sql) return false;
  await ensureTable();
  const rows = (await sql`SELECT key, value FROM app_state_history WHERE id = ${historyId}`) as { key: string; value: unknown }[];
  const entry = rows[0];
  if (!entry) return false;
  await writeState(entry.key, entry.value, `restored_from_history_${historyId}`);
  return true;
}
