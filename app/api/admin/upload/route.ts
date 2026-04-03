import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Sanitize filename
  const ext = path.extname(file.name);
  const name = `blog-${Date.now()}${ext}`;
  const filePath = path.join(process.cwd(), "public", name);

  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({ url: `/${name}` });
}
