import { userRepository } from "@/entities/user/api/UserRepository";
import { postRepository } from "./PostRepository";
import { imagesAPI } from "@/shared/api/images";

interface DeletePostParams {
  postId: PostWithId["id"];
  postOwnerId: UserWithId["id"];
  userId: UserWithId["id"];
}

export const deletePost = async ({
  postId,
  postOwnerId,
  userId,
}: DeletePostParams) => {
  const post = await postRepository.getById(postId);

  if (!post) throw new Error("Post doesn't exist");

  const postOwner = (await userRepository.getById(postOwnerId)) as UserWithId;

  if (!postOwner) throw new Error("Post owner doesn't exist");

  if (postOwner.id !== userId)
    throw new Error("You are not authorized to delete this post");

  if (post.img) {
    await imagesAPI.destroyImage(post.img);
  }

  await postRepository.delete(postId);
};
