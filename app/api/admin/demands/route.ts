import { NextRequest, NextResponse } from "next/server";
import { put, list } from "@vercel/blob";
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

// A real Vercel Blob token starts with "vercel_blob_". Treat anything else
// (missing, placeholder like "your_blob_token_here", etc.) as "no Blob".
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
    const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
    if (blobs.length > 0) {
      const res = await fetch(blobs[0].url, { cache: "no-store" });
      const raw = await res.json();
      return Array.isArray(raw) ? raw : [];
    }
    // First run on Blob — seed from the bundled JSON file and persist
    const seeded = readSeed();
    await put(BLOB_PATH, JSON.stringify(seeded), { access: "public", allowOverwrite: true });
    return seeded;
  } catch (err) {
    console.error("[demands] Blob read failed, falling back to seed:", err);
    return readSeed();
  }
}

async function writeDemands(demands: Demand[]) {
  if (!HAS_BLOB) {
    fs.writeFileSync(SEED_PATH, JSON.stringify(demands, null, 2));
    return;
  }
  await put(BLOB_PATH, JSON.stringify(demands), { access: "public", allowOverwrite: true });
}

function sanitizeSectors(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter((s): s is string => typeof s === "string")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 12);
}

function normalize(body: Partial<Demand>, existing?: Demand): Demand {
  const now = new Date().toISOString();
  return {
    id: existing?.id || body.id || `d-${Date.now()}`,
    title: typeof body.title === "string" ? body.title.trim() : existing?.title || "",
    description:
      typeof body.description === "string" ? body.description.trim() : existing?.description || "",
    country: typeof body.country === "string" ? body.country.trim() : existing?.country || "",
    sectors: sanitizeSectors(body.sectors ?? existing?.sectors),
    poster: typeof body.poster === "string" ? body.poster : existing?.poster || "",
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };
}

export async function GET() {
  return NextResponse.json(await readDemands());
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const demands = await readDemands();
  const demand = normalize(body);
  demands.unshift(demand);
  await writeDemands(demands);
  return NextResponse.json(demand, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  if (!body.id) {
    return NextResponse.json({ error: "id required" }, { status: 400 });
  }
  const demands = await readDemands();
  const index = demands.findIndex((d) => d.id === body.id);
  if (index === -1) {
    return NextResponse.json({ error: "Demand not found" }, { status: 404 });
  }
  const updated = normalize(body, demands[index]);
  demands[index] = updated;
  await writeDemands(demands);
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const demands = await readDemands();
  const filtered = demands.filter((d) => d.id !== id);
  if (filtered.length === demands.length) {
    return NextResponse.json({ error: "Demand not found" }, { status: 404 });
  }
  await writeDemands(filtered);
  return NextResponse.json({ success: true });
}
