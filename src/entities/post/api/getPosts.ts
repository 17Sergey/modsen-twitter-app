import { userRepository } from "@/entities/user/api/UserRepository";
import { postRepository } from "./PostRepository";

export const getPosts = async (username: UserModel["username"]) => {
  const user = (await userRepository.getUserByUsername(username)) as UserWithId;

  if (!user)
    throw new Error(
      "Failed to fetch posts. User with such username doesn't exist.",
    );

  const posts = (await postRepository.getPostsByUserId(
    user.id,
  )) as PostWithId[];

  const response = {
    user,
    posts,
  } as PostsWithUser;

  return response;
};
