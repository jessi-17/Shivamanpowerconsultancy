import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "app/_lib/data/offer.json");

export type Region = "gulf" | "europe";

export interface OfferContent {
  heading: string;
  subheading: string;
  ctaLabel: string;
  formTitle: string;
  formSubtitle: string;
  leftMarqueeImages: string[];
  rightMarqueeImages: string[];
  bgImage: string;
  updatedAt: string;
}

export type OfferFile = Record<Region, OfferContent>;

const DEFAULT_REGION: OfferContent = {
  heading: "",
  subheading: "",
  ctaLabel: "Request Free Call Back",
  formTitle: "Get Free Consultation",
  formSubtitle: "Our team will call you back within 24 hours",
  leftMarqueeImages: [],
  rightMarqueeImages: [],
  bgImage: "",
  updatedAt: new Date().toISOString(),
};

const DEFAULT_FILE: OfferFile = {
  gulf: {
    ...DEFAULT_REGION,
    heading: "Work in the Gulf — UAE, Qatar, Saudi & more",
    subheading: "Free consultation with our senior recruitment consultants.",
  },
  europe: {
    ...DEFAULT_REGION,
    heading: "Work in Europe — Romania, Poland, Croatia & more",
    subheading: "Free consultation for European work permits.",
  },
};

function readFile(): OfferFile {
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(DEFAULT_FILE, null, 2));
    return DEFAULT_FILE;
  }
  try {
    const raw = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
    // Back-compat: if file is still a flat single-region object, migrate it into `gulf`
    if (raw && typeof raw === "object" && !raw.gulf && !raw.europe && raw.heading) {
      const migrated: OfferFile = {
        gulf: { ...DEFAULT_REGION, ...raw, bgImage: raw.bgImage || "" },
        europe: DEFAULT_FILE.europe,
      };
      fs.writeFileSync(DATA_PATH, JSON.stringify(migrated, null, 2));
      return migrated;
    }
    return {
      gulf: { ...DEFAULT_FILE.gulf, ...(raw.gulf || {}) },
      europe: { ...DEFAULT_FILE.europe, ...(raw.europe || {}) },
    };
  } catch {
    return DEFAULT_FILE;
  }
}

function writeFile(file: OfferFile) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(file, null, 2));
}

export function readOffer(region: Region): OfferContent {
  return readFile()[region];
}

export function readOfferAll(): OfferFile {
  return readFile();
}

export async function GET() {
  return NextResponse.json(readFile());
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const region: Region = body.region === "europe" ? "europe" : "gulf";
  const file = readFile();
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
  writeFile(file);
  return NextResponse.json({ region, ...merged });
}
