import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getImageIdFromUrl = (imgUrl: string) => {
  const parts = imgUrl.split("/");
  const lastPart = parts.pop();

  if (lastPart) {
    return lastPart.split(".")[0];
  }

  return undefined;
};

export async function POST(req: NextRequest) {
  const { img } = await req.json();

  if (!img)
    return NextResponse.json({ error: "No image in payload" }, { status: 400 });

  const imageId = getImageIdFromUrl(img);

  if (!imageId)
    return NextResponse.json({ error: "Image was not found" }, { status: 404 });

  await cloudinary.uploader.destroy(imageId);

  return NextResponse.json({ success: "Image was deleted successfully" });
}
