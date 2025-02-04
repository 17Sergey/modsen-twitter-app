import { FC } from "react";
import { Comment } from "../Comment/Comment";

interface CommentsProps {
  commentsData: CommentWithUser[] | undefined;
  isLoading: boolean;
  error: string | null;
}

export const Comments: FC<CommentsProps> = ({
  commentsData,
  isLoading,
  error,
}) => {
  if (isLoading)
    return (
      <>
        <p>Skeleton for comment...</p>
        <p>Skeleton for comment...</p>
        <p>Skeleton for comment...</p>
        <p>Skeleton for comment...</p>
        <p>Skeleton for comment...</p>
      </>
    );

  if (error) return <div>Error loading comments: {error}</div>;

  if (commentsData && commentsData.length === 0)
    return <div>This post has no comments yet</div>;

  if (commentsData)
    return (
      <>
        {commentsData.map(({ comment, user }) => (
          <Comment key={comment.id} comment={comment} user={user} />
        ))}
      </>
    );
};
