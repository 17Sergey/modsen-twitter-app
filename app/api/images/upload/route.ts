import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/app/config/cloudinary";

export async function POST(req: NextRequest) {
  const { img } = await req.json();

  if (!img) NextResponse.json({ error: "No request payload" }, { status: 400 });

  const uploadedResponse = await cloudinary.uploader.upload(img);
  const imgUrl = uploadedResponse.secure_url;

  return NextResponse.json({ imgUrl });
}
