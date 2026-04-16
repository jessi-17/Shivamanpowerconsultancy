import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "app/_lib/data/offer.json");

export interface OfferContent {
  heading: string;
  subheading: string;
  ctaLabel: string;
  formTitle: string;
  formSubtitle: string;
  leftMarqueeImages: string[];
  rightMarqueeImages: string[];
  updatedAt: string;
}

const DEFAULT_OFFER: OfferContent = {
  heading: "Work Abroad in 60 Days — Guaranteed Placement",
  subheading:
    "Free consultation with our senior recruitment consultants. Government licensed agency with 3000+ candidates placed across UAE, Qatar, Poland, Romania.",
  ctaLabel: "Request Free Call Back",
  formTitle: "Get Free Consultation",
  formSubtitle: "Our team will call you back within 24 hours",
  leftMarqueeImages: [],
  rightMarqueeImages: [],
  updatedAt: new Date().toISOString(),
};

export function readOffer(): OfferContent {
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(DEFAULT_OFFER, null, 2));
    return DEFAULT_OFFER;
  }
  try {
    const raw = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
    return { ...DEFAULT_OFFER, ...raw };
  } catch {
    return DEFAULT_OFFER;
  }
}

function writeOffer(offer: OfferContent) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(offer, null, 2));
}

export async function GET() {
  return NextResponse.json(readOffer());
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const current = readOffer();

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
    updatedAt: new Date().toISOString(),
  };

  writeOffer(merged);
  return NextResponse.json(merged);
}
