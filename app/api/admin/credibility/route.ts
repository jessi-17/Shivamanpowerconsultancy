import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import {
  readFile,
  writeFile,
  normalizeVisaStamps,
  normalizeDeployedFeed,
  normalizeAirportPhotos,
  normalizeDestinationReels,
  type CredibilityFile,
} from "./store";
import { requireAdmin } from "../../../_lib/adminAuth";

export async function GET(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  return NextResponse.json(await readFile());
}

export async function PUT(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  const body = await req.json();
  const current = await readFile();

  const merged: CredibilityFile = {
    visaStamps:
      body.visaStamps !== undefined
        ? normalizeVisaStamps(body.visaStamps)
        : current.visaStamps,
    deployedFeed:
      body.deployedFeed !== undefined
        ? normalizeDeployedFeed(body.deployedFeed)
        : current.deployedFeed,
    airportPhotos:
      body.airportPhotos !== undefined
        ? normalizeAirportPhotos(body.airportPhotos)
        : current.airportPhotos,
    destinationReels:
      body.destinationReels !== undefined
        ? normalizeDestinationReels(body.destinationReels)
        : current.destinationReels,
    updatedAt: new Date().toISOString(),
  };

  await writeFile(merged);

  // Invalidate the public fetch cache so the homepage picks up changes immediately.
  try {
    revalidateTag("credibility");
  } catch {
    // tag revalidation is best-effort; never block the save
  }

  return NextResponse.json(merged);
}
