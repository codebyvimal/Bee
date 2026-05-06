import crypto from "node:crypto";

type CloudinaryTransform = {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "limit" | "scale";
  quality?: "auto" | number;
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
};

export function getCloudinaryCloudName() {
  return process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
}

export function buildCloudinaryImageUrl(publicId: string, transform: CloudinaryTransform = {}) {
  const cloudName = getCloudinaryCloudName();

  if (!cloudName) {
    throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME.");
  }

  const transformations = [
    transform.width ? `w_${transform.width}` : null,
    transform.height ? `h_${transform.height}` : null,
    transform.crop ? `c_${transform.crop}` : null,
    transform.quality ? `q_${transform.quality}` : "q_auto",
    transform.format ? `f_${transform.format}` : "f_auto"
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
}

export function createCloudinarySignature(params: Record<string, string | number>) {
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!apiSecret) {
    throw new Error("Missing CLOUDINARY_API_SECRET.");
  }

  const payload = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== "")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return crypto.createHash("sha1").update(`${payload}${apiSecret}`).digest("hex");
}
