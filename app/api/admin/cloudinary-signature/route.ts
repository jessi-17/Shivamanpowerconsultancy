import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "../../../_lib/adminAuth";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "";
const apiKey = process.env.CLOUDINARY_API_KEY || "";
const apiSecret = process.env.CLOUDINARY_API_SECRET || "";

if (cloudName && apiKey && apiSecret) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });
}

export async function POST(req: NextRequest) {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: "Cloudinary not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET in env." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const folderInput = typeof body?.folder === "string" ? body.folder : "shiva-manpower";
  // Sanitize folder name — only allow safe characters
  const folder = folderInput.replace(/[^a-zA-Z0-9_/-]/g, "").slice(0, 64) || "shiva-manpower";

  const timestamp = Math.round(Date.now() / 1000);
  const paramsToSign: Record<string, string | number> = {
    timestamp,
    folder,
  };

  const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);

  return NextResponse.json({
    signature,
    timestamp,
    cloudName,
    apiKey,
    folder,
  });
}
