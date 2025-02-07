import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ status: "success" });

  response.headers.append("Set-Cookie", "token=; Max-Age=0; Path=/;");

  return response;
}
