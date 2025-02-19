"use client";

import { postAPI } from "@/entities/post/api";
import Posts from "@/features/post/posts/components/Posts";
import { DATA_CY, QUERY_KEYS } from "@/shared/constants";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface UserPostsProps {
  username: UserModel["username"];
}

export const UserPosts: FC<UserPostsProps> = ({ username }) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<PostWithUser[] | undefined>({
    queryKey: [QUERY_KEYS.POSTS, username],
    queryFn: () => postAPI.getPosts(username),
    retry: false,
  });

  return (
    <Posts
      posts={posts}
      isLoading={isLoading}
      error={error && error.message}
      testId={DATA_CY.PROFILE.POSTS_LIST}
    />
  );
};
