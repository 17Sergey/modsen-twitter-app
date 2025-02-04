import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  const { img } = await req.json();

  if (!img) NextResponse.json({ error: "No request payload" }, { status: 400 });

  const uploadedResponse = await cloudinary.uploader.upload(img);
  const imgUrl = uploadedResponse.secure_url;

  return NextResponse.json({ imgUrl });
}
