"use client";

import Post from "@/features/post/post/components/Post";
import { FC } from "react";

interface PostPageProps {
  postData: PostWithUser | undefined;
}

export const PostPage: FC<PostPageProps> = ({ postData }) => {
  if (!postData) return <h2>Post was not found</h2>;

  return <Post post={postData.post} user={postData.user} />;
};
