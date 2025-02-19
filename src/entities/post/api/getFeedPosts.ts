import { userRepository } from "@/entities/user/api/UserRepository";
import { postRepository } from "./PostRepository";
import { POSTS_PER_PAGE } from "../constants";

export const getFeedPosts = async (
  username: UserModel["username"],
  page: number,
) => {
  const user = (await userRepository.getUserByUsername(username)) as UserWithId;

  if (!user)
    throw new Error(
      "Failed to fetch feed posts. User with such username doesn't exist.",
    );

  const posts = (await postRepository.getAll()) as PostWithId[];

  const filteredPosts = user.following
    ? posts.filter((post) => user.following?.includes(post.user))
    : posts;

  const postsToSlice = filteredPosts.length === 0 ? posts : filteredPosts;

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const endIndex = page * POSTS_PER_PAGE;
  const finalPosts = postsToSlice.slice(startIndex, endIndex);

  const hasMore = endIndex < postsToSlice.length;

  const userPromises = finalPosts.map(async (post) => {
    const user = (await userRepository.getById(post.user)) as UserWithId;
    return {
      user,
      post,
    };
  });

  const postsWithUsers = await Promise.all(userPromises);

  const response = {
    posts: postsWithUsers,
    hasMore,
  } as PaginationPosts;

  return response;
};
