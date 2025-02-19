import Post from "@/features/post/post/components/Post";
import Loader from "@/shared/components/Loader";
import { FC } from "react";
import styles from "./Posts.module.scss";

interface PostsProps {
  posts: PostWithUser[] | null | undefined;
  isLoading: boolean;
  error: string | null;
  noDataMessage?: string;
  testId?: string;
}

export const Posts: FC<PostsProps> = ({
  posts,
  isLoading,
  error,
  noDataMessage,
  testId = "",
}) => {
  if (isLoading)
    return (
      <div className={styles.container}>
        <Loader variant="md" />
      </div>
    );

  if (error)
    return <div className={styles.container}>Error loading posts: {error}</div>;

  if (posts && posts.length === 0)
    return (
      <div className={styles.container}>
        {noDataMessage || "This user has no posts yet"}
      </div>
    );

  if (posts)
    return (
      <ul data-cy={testId}>
        {posts.map(({ post, user }) => (
          <Post key={post.id} post={post} user={user} />
        ))}
      </ul>
    );
};
