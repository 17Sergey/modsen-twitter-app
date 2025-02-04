import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { FC } from "react";

import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import AdvancedTextarea from "@/shared/components/AdvancedTextarea";

import { postAPI } from "@/entities/post/api";
import { useAdvancedTextarea } from "@/shared/components/AdvancedTextarea/useAdvancedTextarea";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import styles from "./AddPost.module.scss";

interface AddPostProps {
  onAdd?: VoidFunction;
}

export const AddPost: FC<AddPostProps> = ({ onAdd }) => {
  const { user } = useAuth();

  const {
    text,
    img,
    handleTextChange,
    handleImgChange,
    needToReset,
    triggerReset,
  } = useAdvancedTextarea();

  const queryClient = useQueryClient();

  const { mutate: createPostMutation, isPending } = useMutation({
    mutationFn: postAPI.createPost,
    onSuccess: () => {
      toast.success("Post created successfully");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.POSTS],
      });

      triggerReset();
      onAdd?.();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleAddPost = () => {
    if (!text && !img) {
      toast.error("Post must have a text or image");
      return;
    }

    const newPost = {
      userId: user?.id as string,
      text,
      img,
    };

    createPostMutation(newPost);
  };

  return (
    <div>
      <h2>Add Tweet</h2>
      <UserImg src={user?.profileImg} />
      <AdvancedTextarea
        needToReset={needToReset}
        onTextChange={handleTextChange}
        onImgChange={handleImgChange}
      />
      <button onClick={handleAddPost} className={styles.submitButton}>
        {isPending ? "Posting..." : "Add tweet"}
      </button>
    </div>
  );
};
