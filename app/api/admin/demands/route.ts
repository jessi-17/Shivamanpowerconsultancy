import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../_lib/adminAuth";
import { readDemands, writeDemands, type Demand } from "./store";

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

export async function GET(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  return NextResponse.json(await readDemands());
}

export async function POST(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  const body = await req.json();
  const demands = await readDemands();
  const demand = normalize(body);
  demands.unshift(demand);
  await writeDemands(demands);
  return NextResponse.json(demand, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
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
  const denied = await requireAdmin(req);
  if (denied) return denied;
  const { id } = await req.json();

  if (!id || typeof id !== "string") {
    return NextResponse.json(
      { error: "An id is required to delete a demand." },
      { status: 400 }
    );
  }

  const demands = await readDemands();
  const filtered = demands.filter((d) => d.id !== id);
  if (filtered.length === demands.length) {
    return NextResponse.json({ error: `No demand found with id "${id}".` }, { status: 404 });
  }
  await writeDemands(filtered);
  return NextResponse.json({ success: true });
}
