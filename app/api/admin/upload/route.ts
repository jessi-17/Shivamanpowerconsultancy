import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import fs from "fs";
import path from "path";
import { requireAdmin } from "../../../_lib/adminAuth";

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "";
const HAS_BLOB = BLOB_TOKEN.startsWith("vercel_blob_");

const MAX_SIZE_BYTES = 8 * 1024 * 1024; // 8 MB

// Image-only allowlist. Extension comes from the MIME type, never from the
// client-supplied filename (blocks .html/.svg/.php-style upload tricks).
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/avif": ".avif",
};

export async function POST(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;

  const formData = await req.formData();
  const file = formData.get("file") as File;
  const rawPrefix = (formData.get("prefix") as string | null) ?? "blog";
  const prefix = rawPrefix.replace(/[^a-z0-9-]/gi, "").slice(0, 32) || "blog";

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const ext = ALLOWED_TYPES[file.type];
  if (!ext) {
    return NextResponse.json(
      { error: `File type "${file.type || "unknown"}" not allowed. Allowed: JPG, PNG, WebP, GIF, AVIF.` },
      { status: 415 }
    );
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json(
      { error: `File is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max is 8 MB.` },
      { status: 413 }
    );
  }

  const filename = `${prefix}-${Date.now()}${ext}`;

  // Local dev fallback — write to /public so the file is served at /<filename>
  if (!HAS_BLOB) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    fs.writeFileSync(path.join(process.cwd(), "public", filename), buffer);
    return NextResponse.json({ url: `/${filename}` });
  }

  const blob = await put(`uploads/${filename}`, file, { access: "public" });
  return NextResponse.json({ url: blob.url });
}
