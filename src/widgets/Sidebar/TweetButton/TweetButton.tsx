import AddPost from "@/features/post/addPost/components/AddPost";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import Modal from "@/shared/components/Modal";
import { useModal } from "@/shared/hooks/useModal";
import { FC } from "react";
import styles from "./TweetButton.module.scss";

export const TweetButton: FC = () => {
  const {
    isOpen: isAddPostModalOpen,
    openModal: openAddPostModal,
    closeModal: closeAddPostModal,
  } = useModal();

  return (
    <>
      <PrimaryButton className={styles.tweetButton} onClick={openAddPostModal}>
        Tweet
      </PrimaryButton>
      {isAddPostModalOpen && (
        <Modal onClose={closeAddPostModal}>
          <AddPost onAdd={closeAddPostModal} />
        </Modal>
      )}
    </>
  );
};
