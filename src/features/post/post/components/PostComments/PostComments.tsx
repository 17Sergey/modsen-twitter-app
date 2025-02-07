import { commentsAPI } from "@/entities/comment/api";
import Comments from "@/features/comment/components/Comments";
import CommentIcon from "@/shared/assets/comment.svg";
import Modal from "@/shared/components/Modal";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useModal } from "@/shared/hooks/useModal";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FC } from "react";
import AddComment from "../../../../comment/components/AddComment";
import styles from "./PostComments.module.scss";

interface PostCommentsProps {
  postId: PostWithId["id"];
}

export const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const {
    data: commentsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, postId],
    queryFn: () => commentsAPI.getPostComments(postId),
    retry: false,
  });

  const {
    isOpen: isCommentsModalOpen,
    openModal: openCommentsModal,
    closeModal: closeCommentsModal,
  } = useModal();

  const handleOpenComments = () => {
    openCommentsModal();
  };

  return (
    <>
      <button onClick={handleOpenComments} className={styles.button}>
        <Image src={CommentIcon} alt="Comment" width={24} height={24} />
        <span>{commentsData?.length || 0}</span>
      </button>

      {isCommentsModalOpen && (
        <Modal onClose={closeCommentsModal}>
          <Comments
            commentsData={commentsData}
            isLoading={isLoading}
            error={error && error.message}
          />
          <AddComment postId={postId} />
        </Modal>
      )}
    </>
  );
};
