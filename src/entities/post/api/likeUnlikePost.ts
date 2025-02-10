import { postRepository } from "./PostRepository";

interface LikeUnlikePostParams {
  postId: PostWithId["id"];
  newLikes: PostWithId["likes"];
}

export const likeUnlikePost = async ({
  postId,
  newLikes,
}: LikeUnlikePostParams) => {
  await postRepository.update(postId, { likes: newLikes });

  return newLikes;
};
