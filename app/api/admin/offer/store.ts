import { head } from "@vercel/blob";
import fs from "fs";
import path from "path";
import { readState, writeState, hasDb } from "../../../_lib/contentStore";

const BLOB_PATH = "data/offer.json";
const SEED_PATH = path.join(process.cwd(), "app/_lib/data/offer.json");
const STATE_KEY = "offer";

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

export const DEFAULT_FILE: OfferFile = {
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

async function readBlobLegacy(): Promise<OfferFile | null> {
  if (!HAS_BLOB) return null;
  try {
    const blob = await head(BLOB_PATH);
    const res = await fetch(`${blob.url}?t=${Date.now()}`, { cache: "no-store" });
    const raw = await res.json();
    return raw && typeof raw === "object" ? (raw as OfferFile) : null;
  } catch {
    return null;
  }
}

export async function readFile(): Promise<OfferFile> {
  // Primary: Postgres
  if (hasDb) {
    try {
      const dbValue = await readState<OfferFile>(STATE_KEY);
      if (dbValue) return mergeWithDefaults(dbValue);

      // Lazy migration: nothing in DB yet — try to read legacy Blob and copy it forward
      const legacy = await readBlobLegacy();
      if (legacy) {
        await writeState(STATE_KEY, legacy).catch((err) => {
          console.error("[offer] DB migration write failed:", err);
        });
        return mergeWithDefaults(legacy);
      }
    } catch (err) {
      console.error("[offer] Postgres read failed, falling back:", err);
    }
  }

  // Fallback: legacy Blob (when DB not configured)
  const legacy = await readBlobLegacy();
  if (legacy) return mergeWithDefaults(legacy);

  // Last resort: seed file in repo
  return readSeed();
}

export async function writeFile(file: OfferFile) {
  if (!hasDb) {
    if (process.env.VERCEL) {
      throw new Error(
        "DATABASE_URL is not set on this deployment. Offer content cannot be saved because the Vercel filesystem is read-only. Set DATABASE_URL in the project's environment variables and redeploy."
      );
    }
    try {
      // Local dev without DB — write seed file so it persists across restarts
      fs.writeFileSync(SEED_PATH, JSON.stringify(file, null, 2));
    } catch (err) {
      throw new Error(
        `Could not write offer.json locally (${(err as Error).message}). If you are on a hosted env, set DATABASE_URL.`
      );
    }
    return;
  }
  await writeState(STATE_KEY, file);
}

export async function readOffer(region: Region): Promise<OfferContent> {
  return (await readFile())[region];
}

export async function readOfferAll(): Promise<OfferFile> {
  return readFile();
}
