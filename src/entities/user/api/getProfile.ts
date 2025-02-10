"use client";

import { userRepository } from "./UserRepository";
import { postRepository } from "@/entities/post/api/PostRepository";

export const getProfile = async (username: string) => {
  console.log("getProfile", username);

  const user = (await userRepository.getUserByUsername(username)) as UserWithId;
  if (!user) throw new Error("User was not found");

  user.postsCount = await postRepository.getUserPostsCount(user.id);

  return user;
};
