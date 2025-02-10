import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { postAPI } from "@/entities/post/api";
import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import AdvancedTextarea from "@/shared/components/AdvancedTextarea";
import { useAdvancedTextarea } from "@/shared/components/AdvancedTextarea/useAdvancedTextarea";
import ActionButton from "@/shared/components/buttons/ActionButton";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
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
    if (isPending) return;

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

  const renderButton = (
    <ActionButton onClick={handleAddPost} disabled={isPending}>
      {isPending ? "Tweeting..." : "Tweet"}
    </ActionButton>
  );

  return (
    <div className={styles.container}>
      <UserImg src={user?.profileImg} className={styles.userImg} />
      <div className={styles.textArea}>
        <AdvancedTextarea
          needToReset={needToReset}
          onTextChange={handleTextChange}
          onImgChange={handleImgChange}
          renderButton={renderButton}
        />
      </div>
    </div>
  );
};
