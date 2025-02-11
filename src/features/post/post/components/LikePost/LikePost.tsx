import { FC, useEffect, useState } from "react";

import styles from "./LikePost.module.scss";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { postAPI } from "@/entities/post/api";
import LikedIcon from "@/shared/assets/like/like-fill.svg";
import LikeIcon from "@/shared/assets/like/like.svg";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import toast from "react-hot-toast";

interface LikePostProps {
  postId: PostWithId["id"];
  likes: Array<PostWithId["user"]> | undefined;
}

export const LikePost: FC<LikePostProps> = ({ postId, likes }) => {
  const { user } = useAuth();
  const userId = user?.id || "";
  const username = user?.username || "";

  const [optimisticLikes, setOptimisticLikes] = useState(likes);

  const isLiked = optimisticLikes?.includes(userId);
  const likesCount = optimisticLikes?.length || 0;

  const queryClient = useQueryClient();

  const { mutate: likeUnlikeMutation } = useMutation({
    mutationFn: postAPI.likeUnlikePost,
    onSuccess: (newLikes) => {
      const status = newLikes?.includes(userId) ? "liked" : "unliked";
      toast.success(`Post ${status} successfullly`);

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS, username] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleLike = () => {
    let newLikes;

    if (isLiked) {
      newLikes = optimisticLikes?.filter((user) => user !== userId);
    } else {
      newLikes = optimisticLikes ? [...optimisticLikes, userId] : [userId];
    }

    setOptimisticLikes(newLikes);
    likeUnlikeMutation({ postId, newLikes });
  };

  useEffect(() => {
    setOptimisticLikes(likes);
  }, [likes]);

  return (
    <button className={styles.likeButton} onClick={handleLike}>
      <Image
        src={isLiked ? LikedIcon : LikeIcon}
        alt="Like post"
        className={styles.likeIcon}
      />
      <span>{likesCount}</span>
    </button>
  );
};
