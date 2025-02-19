import { userRepository } from "@/entities/user/api/UserRepository";
import { postRepository } from "./PostRepository";

export const searchPosts = async (query: string, username: string) => {
  const user = (await userRepository.getUserByUsername(username)) as UserWithId;

  if (!user) {
    throw new Error("Error searching posts: user not found");
  }

  const posts = await postRepository.searchPosts(query, user.id);

  return {
    user,
    posts,
  } as PostsWithUser;
};
