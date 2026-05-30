import fs from "fs";
import path from "path";
import { readState, writeState, hasDb } from "../../../_lib/contentStore";

const SEED_PATH = path.join(process.cwd(), "app/_lib/data/credibility.json");
const STATE_KEY = "credibility";

export interface VisaStamp {
  img: string;
  name: string;
  country: string;
  flag: string;
  month: string;
  type: string;
}

export interface DeployedEntry {
  day: string;
  name: string;
  country: string;
  role: string;
  flag: string;
}

export interface AirportPhoto {
  img: string;
  name: string;
  to: string;
  flag: string;
}

export interface DestinationReel {
  id: string;
  label: string;
  country: string;
  type: "reel" | "p";
}

export interface CredibilityFile {
  visaStamps: VisaStamp[];
  deployedFeed: DeployedEntry[];
  airportPhotos: AirportPhoto[];
  destinationReels: DestinationReel[];
  updatedAt: string;
}

export const DEFAULT_FILE: CredibilityFile = {
  visaStamps: [],
  deployedFeed: [],
  airportPhotos: [],
  destinationReels: [],
  updatedAt: new Date(0).toISOString(),
};

function mergeWithDefaults(raw: Partial<CredibilityFile> | null | undefined): CredibilityFile {
  return {
    visaStamps: Array.isArray(raw?.visaStamps) ? raw!.visaStamps : DEFAULT_FILE.visaStamps,
    deployedFeed: Array.isArray(raw?.deployedFeed) ? raw!.deployedFeed : DEFAULT_FILE.deployedFeed,
    airportPhotos: Array.isArray(raw?.airportPhotos) ? raw!.airportPhotos : DEFAULT_FILE.airportPhotos,
    destinationReels: Array.isArray(raw?.destinationReels) ? raw!.destinationReels : DEFAULT_FILE.destinationReels,
    updatedAt: typeof raw?.updatedAt === "string" ? raw!.updatedAt : DEFAULT_FILE.updatedAt,
  };
}

function readSeed(): CredibilityFile {
  try {
    const raw = fs.existsSync(SEED_PATH)
      ? JSON.parse(fs.readFileSync(SEED_PATH, "utf-8"))
      : DEFAULT_FILE;
    return mergeWithDefaults(raw);
  } catch {
    return DEFAULT_FILE;
  }
}

export async function readFile(): Promise<CredibilityFile> {
  if (hasDb) {
    try {
      const dbValue = await readState<CredibilityFile>(STATE_KEY);
      if (dbValue) return mergeWithDefaults(dbValue);
    } catch (err) {
      console.error("[credibility] Postgres read failed, falling back to seed:", err);
    }
  }
  return readSeed();
}

export async function writeFile(file: CredibilityFile) {
  if (!hasDb) {
    if (process.env.VERCEL) {
      throw new Error(
        "DATABASE_URL is not set on this deployment. Credibility content cannot be saved because the Vercel filesystem is read-only. Set DATABASE_URL in the project's environment variables and redeploy."
      );
    }
    try {
      fs.writeFileSync(SEED_PATH, JSON.stringify(file, null, 2));
    } catch (err) {
      throw new Error(
        `Could not write credibility.json locally (${(err as Error).message}). If you are on a hosted env, set DATABASE_URL.`
      );
    }
    return;
  }
  await writeState(STATE_KEY, file);
}

/* ---------- normalizers used by the API route to validate inbound data ---------- */
function isString(v: unknown): v is string {
  return typeof v === "string";
}

export function normalizeVisaStamps(v: unknown): VisaStamp[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((it): it is Record<string, unknown> => typeof it === "object" && it !== null)
    .map((it) => ({
      img: isString(it.img) ? it.img : "",
      name: isString(it.name) ? it.name : "",
      country: isString(it.country) ? it.country : "",
      flag: isString(it.flag) ? it.flag : "",
      month: isString(it.month) ? it.month : "",
      type: isString(it.type) ? it.type : "",
    }))
    .filter((it) => it.name.trim() !== "" || it.img.trim() !== "");
}

export function normalizeDeployedFeed(v: unknown): DeployedEntry[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((it): it is Record<string, unknown> => typeof it === "object" && it !== null)
    .map((it) => ({
      day: isString(it.day) ? it.day : "",
      name: isString(it.name) ? it.name : "",
      country: isString(it.country) ? it.country : "",
      role: isString(it.role) ? it.role : "",
      flag: isString(it.flag) ? it.flag : "",
    }))
    .filter((it) => it.name.trim() !== "");
}

export function normalizeAirportPhotos(v: unknown): AirportPhoto[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((it): it is Record<string, unknown> => typeof it === "object" && it !== null)
    .map((it) => ({
      img: isString(it.img) ? it.img : "",
      name: isString(it.name) ? it.name : "",
      to: isString(it.to) ? it.to : "",
      flag: isString(it.flag) ? it.flag : "",
    }))
    .filter((it) => it.name.trim() !== "" || it.img.trim() !== "");
}

export function normalizeDestinationReels(v: unknown): DestinationReel[] {
  if (!Array.isArray(v)) return [];
  return v
    .filter((it): it is Record<string, unknown> => typeof it === "object" && it !== null)
    .map((it): DestinationReel => ({
      id: isString(it.id) ? it.id : "",
      label: isString(it.label) ? it.label : "",
      country: isString(it.country) ? it.country : "",
      type: it.type === "p" ? "p" : "reel",
    }))
    .filter((it) => it.id.trim() !== "");
}
