import { commentsRepository } from "./CommentsRepository";
import { imagesAPI } from "@/shared/api/images";

interface AddCommentParams {
  postId: PostWithId["id"];
  userId: UserWithId["id"];
  text: CommentModel["text"];
  img: string | null;
}

export const addComment = async ({
  postId,
  userId,
  text,
  img,
}: AddCommentParams) => {
  const newComment = {
    post: postId,
    user: userId,
    text,
    createdAt: Date.now(),
  } as CommentModel;

  if (img) {
    const imgUrl = (await imagesAPI.uploadImage(img)) as string;
    newComment.img = imgUrl;
  }

  await commentsRepository.create(newComment);
};
