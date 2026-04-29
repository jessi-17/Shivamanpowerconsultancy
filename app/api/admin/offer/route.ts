import { NextRequest, NextResponse } from "next/server";
import {
  readFile,
  writeFile,
  type OfferContent,
  type Region,
} from "./store";

export async function GET() {
  return NextResponse.json(await readFile());
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const region: Region = body.region === "europe" ? "europe" : "gulf";
  const file = await readFile();
  const current = file[region];

  const merged: OfferContent = {
    heading: typeof body.heading === "string" ? body.heading : current.heading,
    subheading: typeof body.subheading === "string" ? body.subheading : current.subheading,
    ctaLabel: typeof body.ctaLabel === "string" ? body.ctaLabel : current.ctaLabel,
    formTitle: typeof body.formTitle === "string" ? body.formTitle : current.formTitle,
    formSubtitle: typeof body.formSubtitle === "string" ? body.formSubtitle : current.formSubtitle,
    leftMarqueeImages: Array.isArray(body.leftMarqueeImages)
      ? body.leftMarqueeImages.filter((s: unknown) => typeof s === "string")
      : current.leftMarqueeImages,
    rightMarqueeImages: Array.isArray(body.rightMarqueeImages)
      ? body.rightMarqueeImages.filter((s: unknown) => typeof s === "string")
      : current.rightMarqueeImages,
    bgImage: typeof body.bgImage === "string" ? body.bgImage : current.bgImage,
    updatedAt: new Date().toISOString(),
  };

  file[region] = merged;
  await writeFile(file);
  return NextResponse.json({ region, ...merged });
}
