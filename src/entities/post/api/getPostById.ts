import { userRepository } from "@/entities/user/api/UserRepository";
import { postRepository } from "./PostRepository";

export const getPostById = async (postId: PostWithId["id"]) => {
  try {
    const post = await postRepository.getById(postId);

    if (!post) throw new Error("Post not found");

    const user = (await userRepository.getById(post.user)) as UserWithId;

    if (!user)
      throw new Error("Failed to fetch post. User with such id doesn't exist.");

    return {
      user,
      post,
    } as PostWithUser;
  } catch {
    return undefined;
  }
};
