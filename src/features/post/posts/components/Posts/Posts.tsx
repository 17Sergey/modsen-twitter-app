import { Post } from "@/features/post/post/Post";
import { FC } from "react";

interface PostsProps {
  posts: PostsWithUser["posts"] | undefined;
  user: PostsWithUser["user"] | undefined;
  isLoading: boolean;
  error: string | null;
}

export const Posts: FC<PostsProps> = ({ posts, user, isLoading, error }) => {
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

  if (posts && posts.length === 0) return <div>This user has no posts yet</div>;

  if (posts && user)
    return (
      <>
        {posts.map((post) => (
          <Post key={post.id} post={post} user={user} />
        ))}
      </>
    );
};
