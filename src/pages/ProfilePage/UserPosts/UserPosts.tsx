"use client";

import { postAPI } from "@/entities/post/api";
import Posts from "@/features/post/posts/components/Posts";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface UserPostsProps {
  username: UserModel["username"];
}

export const UserPosts: FC<UserPostsProps> = ({ username }) => {
  const {
    data: postsData,
    isLoading,
    error,
  } = useQuery<PostsWithUser | undefined>({
    queryKey: [QUERY_KEYS.POSTS, username],
    queryFn: () => postAPI.getPosts(username),
    retry: false,
  });

  return (
    <Posts
      posts={postsData?.posts}
      user={postsData?.user}
      isLoading={isLoading}
      error={error && error.message}
    />
  );
};
