import { head } from "@vercel/blob";
import fs from "fs";
import path from "path";
import { readState, writeState, hasDb } from "../../../_lib/contentStore";

const BLOB_PATH = "data/demands.json";
const SEED_PATH = path.join(process.cwd(), "app/_lib/data/demands.json");
const STATE_KEY = "demands";

export interface Demand {
  id: string;
  title: string;
  description: string;
  country: string;
  sectors: string[];
  poster: string;
  createdAt: string;
  updatedAt: string;
}

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "";
const HAS_BLOB = BLOB_TOKEN.startsWith("vercel_blob_");

function readSeed(): Demand[] {
  try {
    const raw = fs.existsSync(SEED_PATH) ? fs.readFileSync(SEED_PATH, "utf-8") : "[]";
    const demands = JSON.parse(raw);
    return Array.isArray(demands) ? demands : [];
  } catch {
    return [];
  }
}

async function readBlobLegacy(): Promise<Demand[] | null> {
  if (!HAS_BLOB) return null;
  try {
    const blob = await head(BLOB_PATH);
    const res = await fetch(`${blob.url}?t=${Date.now()}`, { cache: "no-store" });
    const raw = await res.json();
    return Array.isArray(raw) ? raw : null;
  } catch {
    return null;
  }
}

export async function readDemands(): Promise<Demand[]> {
  // Primary: Postgres
  if (hasDb) {
    try {
      const dbValue = await readState<Demand[]>(STATE_KEY);
      if (dbValue && Array.isArray(dbValue)) return dbValue;

      // Lazy migration: nothing in DB yet — copy from legacy Blob if present
      const legacy = await readBlobLegacy();
      if (legacy) {
        await writeState(STATE_KEY, legacy).catch((err) => {
          console.error("[demands] DB migration write failed:", err);
        });
        return legacy;
      }
    } catch (err) {
      console.error("[demands] Postgres read failed, falling back:", err);
    }
  }

  // Fallback: legacy Blob (when DB not configured)
  const legacy = await readBlobLegacy();
  if (legacy) return legacy;

  // Last resort: seed file in repo
  return readSeed();
}

export async function writeDemands(demands: Demand[]) {
  if (!hasDb) {
    fs.writeFileSync(SEED_PATH, JSON.stringify(demands, null, 2));
    return;
  }
  await writeState(STATE_KEY, demands);
}
