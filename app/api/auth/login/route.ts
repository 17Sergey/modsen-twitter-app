import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  console.log("LOGIN TOKEN: " + token);

  const response = NextResponse.json({ status: "success" });

  // Устанавливаем куку вручную
  response.headers.append(
    "Set-Cookie",
    `token=${token}; Max-Age=${30 * 24 * 60 * 60}; Path=/; HttpOnly`,
  );

  // Логируем куки
  console.log("Set-Cookie:", response.headers.get("Set-Cookie"));

  return response;
}
