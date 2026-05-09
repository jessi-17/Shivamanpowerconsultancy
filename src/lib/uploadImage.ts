/**
 * Client helper: uploads a file directly from the browser to Cloudinary.
 * Bypasses the Vercel serverless 4.5 MB body limit by going straight to
 * Cloudinary's API instead of through our own /api/admin/upload route.
 *
 * Flow:
 *   1. Hit /api/admin/cloudinary-signature to get signed params (server uses
 *      our CLOUDINARY_API_SECRET to sign — secret never reaches the browser).
 *   2. POST the file directly to api.cloudinary.com with that signature.
 *   3. Receive the secure_url back; that's the image URL to store.
 */

interface CloudinarySignature {
  signature: string;
  timestamp: number;
  cloudName: string;
  apiKey: string;
  folder: string;
}

interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  [key: string]: unknown;
}

export async function uploadImage(
  file: File,
  folder = "shiva-manpower"
): Promise<string> {
  // Step 1: get signed params from our server
  const sigRes = await fetch("/api/admin/cloudinary-signature", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ folder }),
  });

  if (!sigRes.ok) {
    const text = await sigRes.text().catch(() => "");
    throw new Error(`signature request failed: HTTP ${sigRes.status} ${text}`);
  }

  const sig = (await sigRes.json()) as CloudinarySignature & { error?: string };
  if (sig.error) throw new Error(sig.error);

  // Step 2: upload directly to Cloudinary
  const fd = new FormData();
  fd.append("file", file);
  fd.append("api_key", sig.apiKey);
  fd.append("timestamp", String(sig.timestamp));
  fd.append("signature", sig.signature);
  fd.append("folder", sig.folder);

  const uploadUrl = `https://api.cloudinary.com/v1_1/${sig.cloudName}/auto/upload`;
  const upRes = await fetch(uploadUrl, { method: "POST", body: fd });

  if (!upRes.ok) {
    const text = await upRes.text().catch(() => "");
    throw new Error(`cloudinary upload failed: HTTP ${upRes.status} ${text}`);
  }

  const data = (await upRes.json()) as CloudinaryUploadResponse;
  return data.secure_url;
}
