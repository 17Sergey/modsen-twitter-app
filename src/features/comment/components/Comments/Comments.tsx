import Loader from "@/shared/components/Loader";
import { FC } from "react";
import { Comment } from "../Comment/Comment";
import styles from "./Comments.module.scss";

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
      <div className={styles.container}>
        <Loader variant="lg" />
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>Error loading comments: {error}</div>
    );

  if (commentsData && commentsData.length === 0)
    return (
      <div className={styles.container}>This post has no comments yet</div>
    );

  if (commentsData)
    return (
      <>
        {commentsData.map(({ comment, user }) => (
          <Comment key={comment.id} comment={comment} user={user} />
        ))}
      </>
    );
};
