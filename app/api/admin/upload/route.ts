import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import fs from "fs";
import path from "path";

const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "";
const HAS_BLOB = BLOB_TOKEN.startsWith("vercel_blob_");

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const rawPrefix = (formData.get("prefix") as string | null) ?? "blog";
  const prefix = rawPrefix.replace(/[^a-z0-9-]/gi, "").slice(0, 32) || "blog";

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const ext = path.extname(file.name);
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
