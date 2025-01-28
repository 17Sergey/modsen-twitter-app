import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  // Проверьте токен (например, с помощью Firebase или другого метода)
  // Здесь вы можете добавить логику для проверки токена и получения информации о пользователе

  //   const user = {
  //     // Вставьте информацию о пользователе
  //     id: "123",
  //     name: "John Doe",
  //   };

  return NextResponse.json({ token: token.value });
}
