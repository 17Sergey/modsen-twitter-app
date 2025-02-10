import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { userAPI } from "@/entities/user/api/userAPI";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

export const useFollow = (
  isFollowedByMe: boolean,
  onSuccess?: VoidFunction,
) => {
  const { user } = useAuth();
  const currentUserId = user?.id || "";

  const [isFollowed, setIsFollowed] = useState(isFollowedByMe);

  const { mutate: followMutation, isPending } = useMutation({
    mutationKey: ["follow"],
    mutationFn: (otherUserId: string) =>
      userAPI.followUnfollow({ otherUserId, currentUserId }),
    onSuccess: (message: string) => {
      toast.success(message);
      setIsFollowed(!isFollowed);

      onSuccess?.();
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return { isPending, isFollowed, followMutation };
};
