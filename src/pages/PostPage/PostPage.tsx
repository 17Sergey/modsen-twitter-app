"use client";

import Post from "@/features/post/post/components/Post";
import { FC } from "react";
import NotFound from "../../../app/not-found";

interface PostPageProps {
  postData: PostWithUser | undefined;
}

export const PostPage: FC<PostPageProps> = ({ postData }) => {
  if (!postData) return <NotFound />;

  return <Post post={postData.post} user={postData.user} />;
};
