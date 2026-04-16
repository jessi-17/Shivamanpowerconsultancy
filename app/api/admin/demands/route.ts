import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "app/_lib/data/demands.json");

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

export function readDemands(): Demand[] {
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, "[]");
    return [];
  }
  try {
    const raw = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function writeDemands(demands: Demand[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(demands, null, 2));
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
  return NextResponse.json(readDemands());
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const demands = readDemands();
  const demand = normalize(body);
  demands.unshift(demand);
  writeDemands(demands);
  return NextResponse.json(demand, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  if (!body.id) {
    return NextResponse.json({ error: "id required" }, { status: 400 });
  }
  const demands = readDemands();
  const index = demands.findIndex((d) => d.id === body.id);
  if (index === -1) {
    return NextResponse.json({ error: "Demand not found" }, { status: 404 });
  }
  const updated = normalize(body, demands[index]);
  demands[index] = updated;
  writeDemands(demands);
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const demands = readDemands();
  const filtered = demands.filter((d) => d.id !== id);
  if (filtered.length === demands.length) {
    return NextResponse.json({ error: "Demand not found" }, { status: 404 });
  }
  writeDemands(filtered);
  return NextResponse.json({ success: true });
}
