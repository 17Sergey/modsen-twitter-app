import { userRepository } from "@/entities/user/api/UserRepository";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/shared/constants/constants";
import { postRepository } from "@/entities/post/api/PostRepository";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const decoded = jwt.verify(token, JWT_SECRET) as JWT_PAYLOAD;
  if (!decoded) {
    return NextResponse.json(
      { error: "Unauthorized: Invalid token" },
      { status: 401 },
    );
  }

  const user = (await userRepository.getUserByEmail(
    decoded.email,
  )) as UserWithId;

  user.postsCount = await postRepository.getUserPostsCount(user.id);

  if (!user) NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ user });
}
