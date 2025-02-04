import { FC } from "react";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { postAPI } from "@/entities/post/api";
import TrashIcon from "@/shared/assets/trash.svg";
import Modal from "@/shared/components/Modal";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useModal } from "@/shared/hooks/useModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import toast from "react-hot-toast";
import styles from "./DeletePost.module.scss";

interface DeletePostProps {
  postId: PostWithId["id"];
  postOwnerId: UserWithId["id"];
}

export const DeletePost: FC<DeletePostProps> = ({ postId, postOwnerId }) => {
  const { user } = useAuth();
  const userId = user?.id || "";
  const username = user?.username;

  const queryClient = useQueryClient();

  const { mutate: deletePostMutation } = useMutation({
    mutationFn: postAPI.deletePost,
    onSuccess: () => {
      toast.success("Post deleted successfullly");
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS, username] });
      closeModal();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { isOpen, openModal, closeModal } = useModal();

  const handleConfirm = () => {
    deletePostMutation({ postId, postOwnerId, userId });
  };

  return (
    <span className={styles.n}>
      <button onClick={openModal}>
        <Image src={TrashIcon} width={24} height={24} alt="Delete" />
      </button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <div>Are you sure you want to delele the post?</div>
          <button onClick={handleConfirm}>Delete</button>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
      )}
    </span>
  );
};
