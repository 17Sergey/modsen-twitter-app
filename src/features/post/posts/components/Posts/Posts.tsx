import Post from "@/features/post/post/components/Post";
import { FC } from "react";

interface PostsProps {
  posts: PostWithUser[] | undefined;
  isLoading: boolean;
  error: string | null;
  noDataMessage?: string;
}

export const Posts: FC<PostsProps> = ({
  posts,
  isLoading,
  error,
  noDataMessage,
}) => {
  if (isLoading)
    return (
      <>
        <p>Skeleton for post...</p>
        <p>Skeleton for post...</p>
        <p>Skeleton for post...</p>
        <p>Skeleton for post...</p>
        <p>Skeleton for post...</p>
      </>
    );

  if (error) return <div>Error loading posts: {error}</div>;

  if (posts && posts.length === 0)
    return <div>{noDataMessage || "This user has no posts yet"}</div>;

  if (posts)
    return (
      <>
        {posts.map(({ post, user }) => (
          <Post key={post.id} post={post} user={user} />
        ))}
      </>
    );
};
