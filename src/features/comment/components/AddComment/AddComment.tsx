import { FC } from "react";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { commentsAPI } from "@/entities/comment/api";
import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import AdvancedTextarea from "@/shared/components/AdvancedTextarea";
import { useAdvancedTextarea } from "@/shared/components/AdvancedTextarea/useAdvancedTextarea";
import ActionButton from "@/shared/components/buttons/ActionButton";
import { QUERY_KEYS } from "@/shared/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import styles from "./AddComment.module.scss";

interface AddCommentProps {
  postId: PostWithId["id"];
}

export const AddComment: FC<AddCommentProps> = ({ postId }) => {
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

  const { mutate: addCommentMutation, isPending } = useMutation({
    mutationFn: commentsAPI.addComment,
    onSuccess: () => {
      toast.success("Comment added successfully");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, postId],
      });

      triggerReset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleAddComment = () => {
    if (!text && !img) {
      toast.error("Comment must have a text or image");
      return;
    }

    const newComment = {
      postId,
      userId: user?.id as string,
      text,
      img,
    };

    addCommentMutation(newComment);
  };

  const renderButton = (
    <ActionButton onClick={handleAddComment} disabled={isPending}>
      {isPending ? "Commenting..." : "Comment"}
    </ActionButton>
  );

  return (
    <div className={styles.container}>
      <UserImg src={user?.profileImg} />
      <div className={styles.textArea}>
        <AdvancedTextarea
          placeholder="Your comment..."
          needToReset={needToReset}
          onTextChange={handleTextChange}
          onImgChange={handleImgChange}
          renderButton={renderButton}
        />
      </div>
    </div>
  );
};
