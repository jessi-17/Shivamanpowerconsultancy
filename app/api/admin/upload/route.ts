import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const rawPrefix = (formData.get("prefix") as string | null) ?? "blog";
  const prefix = rawPrefix.replace(/[^a-z0-9-]/gi, "").slice(0, 32) || "blog";

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = path.extname(file.name);
  const name = `${prefix}-${Date.now()}${ext}`;
  const filePath = path.join(process.cwd(), "public", name);

  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({ url: `/${name}` });
}
