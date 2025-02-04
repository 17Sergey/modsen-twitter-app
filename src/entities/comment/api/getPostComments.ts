import { userRepository } from "@/entities/user/api/UserRepository";
import { commentsRepository } from "./CommentsRepository";

export const getPostComments = async (postId: PostWithId["id"]) => {
  const comments = (await commentsRepository.getByPostId(
    postId,
  )) as CommentWithId[];

  const userPromises = comments.map(async (comment) => {
    const user = (await userRepository.getById(comment.user)) as UserWithId;
    return {
      user,
      comment,
    };
  });

  const commentsWithUsers = await Promise.all(userPromises);

  return commentsWithUsers;
};
