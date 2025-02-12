"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { postAPI } from "@/entities/post/api";
import Posts from "@/features/post/posts/components/Posts";
import ActionButton from "@/shared/components/buttons/ActionButton";
import { QUERY_KEYS } from "@/shared/constants";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import styles from "./FeedPosts.module.scss";

export const FeedPosts: FC = () => {
  const { user } = useAuth();
  const username = user?.username || "";

  const [page, setPage] = useState(1);
  const [displayedPosts, setDisplayedPosts] = useState<
    PostWithUser[] | undefined
  >(undefined);

  const {
    data: postsData,
    isLoading,
    error,
    isRefetching,
    refetch,
  } = useQuery<PaginationPosts | undefined>({
    queryKey: [QUERY_KEYS.FEED_POSTS],
    queryFn: () => postAPI.getFeedPosts(username, page),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: false,
  });

  const handleFetchMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    const newPosts = postsData?.posts || [];
    setDisplayedPosts((prevPosts) =>
      prevPosts ? [...prevPosts, ...newPosts] : [...newPosts],
    );
  }, [postsData]);

  return (
    <>
      <Posts
        posts={displayedPosts}
        isLoading={isLoading}
        error={error && error.message}
        noDataMessage={"No posts to show yet. Follow someone!"}
      />
      {isRefetching && <span>Refetching...</span>}
      {!isRefetching && postsData?.hasMore && (
        <div className={styles.more}>
          <ActionButton onClick={handleFetchMore}>Fetch more</ActionButton>
        </div>
      )}
    </>
  );
};
