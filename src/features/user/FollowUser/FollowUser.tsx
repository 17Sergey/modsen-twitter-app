"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import FollowButton from "@/shared/components/buttons/FollowButton";
import { useFollow } from "@/shared/hooks/useFollow";
import { FC } from "react";

interface FollowUserProps {
  userId: UserWithId["id"];
  followers: UserWithId["followers"];
  onSuccess?: VoidFunction;
}

export const FollowUser: FC<FollowUserProps> = ({
  userId,
  followers,
  onSuccess,
}) => {
  const { user: currentUser } = useAuth();
  const currentUserId = currentUser?.id || "";

  const isFollowedByMe = !!followers?.includes(currentUserId);

  const { isPending, isFollowed, followMutation } = useFollow(
    isFollowedByMe,
    onSuccess,
  );

  const handleFollow = () => {
    followMutation(userId);
  };

  return (
    <FollowButton
      isFollowing={isFollowed}
      isLoading={isPending}
      onClick={handleFollow}
    />
  );
};
