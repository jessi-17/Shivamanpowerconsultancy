import { NextRequest, NextResponse } from "next/server";
import { put, list } from "@vercel/blob";
import fs from "fs";
import path from "path";

const BLOB_PATH = "data/offer.json";
const SEED_PATH = path.join(process.cwd(), "app/_lib/data/offer.json");

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

// A real Vercel Blob token starts with "vercel_blob_". Anything else (missing
// or placeholder) means "use local seed file as the source of truth."
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "";
const HAS_BLOB = BLOB_TOKEN.startsWith("vercel_blob_");

function mergeWithDefaults(raw: Partial<OfferFile> | null | undefined): OfferFile {
  return {
    gulf: { ...DEFAULT_FILE.gulf, ...(raw?.gulf || {}) },
    europe: { ...DEFAULT_FILE.europe, ...(raw?.europe || {}) },
  };
}

function readSeed(): OfferFile {
  try {
    const raw = fs.existsSync(SEED_PATH)
      ? JSON.parse(fs.readFileSync(SEED_PATH, "utf-8"))
      : DEFAULT_FILE;
    return mergeWithDefaults(raw);
  } catch {
    return DEFAULT_FILE;
  }
}

async function readFile(): Promise<OfferFile> {
  if (!HAS_BLOB) return readSeed();

  try {
    const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
    if (blobs.length > 0) {
      const res = await fetch(blobs[0].url, { cache: "no-store" });
      const raw = await res.json();
      return mergeWithDefaults(raw);
    }
    // First run on Blob — seed from local file and persist
    const seeded = readSeed();
    await put(BLOB_PATH, JSON.stringify(seeded), { access: "public", allowOverwrite: true });
    return seeded;
  } catch (err) {
    console.error("[offer] Blob read failed, falling back to seed:", err);
    return readSeed();
  }
}

async function writeFile(file: OfferFile) {
  if (!HAS_BLOB) {
    fs.writeFileSync(SEED_PATH, JSON.stringify(file, null, 2));
    return;
  }
  await put(BLOB_PATH, JSON.stringify(file), { access: "public", allowOverwrite: true });
}

export async function readOffer(region: Region): Promise<OfferContent> {
  return (await readFile())[region];
}

export async function readOfferAll(): Promise<OfferFile> {
  return readFile();
}

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
