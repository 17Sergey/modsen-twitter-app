import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ status: "success" });

  // Устанавливаем куку с истекшим сроком действия для её удаления
  response.headers.append("Set-Cookie", "token=; Max-Age=0; Path=/;");

  return response;
}