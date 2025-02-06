import { userRepository } from "@/entities/user/api/UserRepository";
import { postRepository } from "./PostRepository";

interface GetSuggestedPostsParams {
  username: string;
}

export const getSuggestedPosts = async ({
  username,
}: GetSuggestedPostsParams) => {
  const user = (await userRepository.getUserByUsername(username)) as UserWithId;
  if (!user)
    throw new Error("Error fetching suggested posts: username not found");

  const posts = (await postRepository.getPostsByUserId(
    user.id,
  )) as PostWithId[];

  const postsWithImages = posts.filter(({ img }) => Boolean(img));

  const finalPosts =
    postsWithImages.length > 6 ? postsWithImages.slice(0, 6) : postsWithImages;

  return {
    user,
    posts: finalPosts,
  } as PostsWithSameUser;
};
