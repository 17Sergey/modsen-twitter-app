import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/shared/constants/constants";

export async function POST(req: NextRequest) {
  const { payload } = await req.json();

  if (!payload)
    NextResponse.json({ error: "No request payload" }, { status: 400 });

  const jwtPayload = { email: payload } as JWT_PAYLOAD;

  const token = jwt.sign(jwtPayload, JWT_SECRET, {
    expiresIn: "15d",
  });

  const response = NextResponse.json({ status: "success" });

  response.headers.append(
    "Set-Cookie",
    `token=${token}; Max-Age=${30 * 24 * 60 * 60}; Path=/; HttpOnly`,
  );

  return response;
}
