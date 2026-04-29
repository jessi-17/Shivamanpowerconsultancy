import { put, head } from "@vercel/blob";
import fs from "fs";
import path from "path";

const BLOB_PATH = "data/demands.json";
const SEED_PATH = path.join(process.cwd(), "app/_lib/data/demands.json");

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

export async function readDemands(): Promise<Demand[]> {
  if (!HAS_BLOB) return readSeed();

  try {
    const blob = await head(BLOB_PATH);
    const res = await fetch(`${blob.url}?t=${Date.now()}`, { cache: "no-store" });
    const raw = await res.json();
    return Array.isArray(raw) ? raw : [];
  } catch (err: unknown) {
    if ((err as { name?: string })?.name === "BlobNotFoundError") {
      const seeded = readSeed();
      try {
        await put(BLOB_PATH, JSON.stringify(seeded), {
          access: "public",
          allowOverwrite: true,
          addRandomSuffix: false,
          cacheControlMaxAge: 0,
        });
      } catch {
        /* swallow — return seed anyway */
      }
      return seeded;
    }
    console.error("[demands] Blob read failed, falling back to seed:", err);
    return readSeed();
  }
}

export async function writeDemands(demands: Demand[]) {
  if (!HAS_BLOB) {
    fs.writeFileSync(SEED_PATH, JSON.stringify(demands, null, 2));
    return;
  }
  await put(BLOB_PATH, JSON.stringify(demands), {
    access: "public",
    allowOverwrite: true,
    addRandomSuffix: false,
    cacheControlMaxAge: 0,
  });
}
