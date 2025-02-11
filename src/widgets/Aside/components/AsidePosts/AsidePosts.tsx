"use client";

import Loader from "@/shared/components/Loader";
import { FC } from "react";
import { AsidePost } from "../AsidePost/AsidePost";
import AsidePostImage from "../AsidePostImage";
import styles from "./AsidePosts.module.scss";

interface AsidePostsProps {
  postsData: PostsWithSameUser | undefined;
  isLoading: boolean;
  error: string | null;
  withPostText?: boolean;
}

export const AsidePosts: FC<AsidePostsProps> = ({
  postsData,
  isLoading,
  error,
  withPostText,
}) => {
  if (isLoading)
    return (
      <>
        <Loader variant="md" />
      </>
    );

  if (error) return <div>Error while loading: {error}</div>;

  if (postsData && postsData.posts.length === 0)
    return <div>No posts found</div>;

  if (postsData) {
    return (
      <ul className={`${styles.posts} ${!withPostText && styles.imageGallery}`}>
        {postsData.posts.map((post) =>
          withPostText ? (
            <AsidePost key={post.id} post={post} user={postsData.user} />
          ) : (
            <AsidePostImage key={post.id} post={post} />
          ),
        )}
      </ul>
    );
  }
};
