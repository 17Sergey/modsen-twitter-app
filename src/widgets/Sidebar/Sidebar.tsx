"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { authAPI } from "@/pages/EntryPage/api/auth";

import AddPost from "@/features/post/addPost/components/AddPost";
import profileIcon from "@/shared/assets/sidebar/profile.svg";
import Modal from "@/shared/components/Modal";
import { ROUTES } from "@/shared/constants/constants";
import { useModal } from "@/shared/hooks/useModal";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";
import { SIDEBAR_ITEMS } from "./const";

export const Sidebar = () => {
  const { user } = useAuth();
  const router = useRouter();

  const {
    isOpen: isAddPostModalOpen,
    openModal: openAddPostModal,
    closeModal: closeAddPostModal,
  } = useModal();

  const { mutate } = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      toast.success("Logged out successfully");
      router.push(ROUTES.ENTRY);
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  const handleLogout = () => {
    mutate();
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItems}>
        {SIDEBAR_ITEMS.map(({ label, icon, route }) => (
          <SidebarItem key={label} icon={icon} label={label} route={route} />
        ))}
      </div>
      <button className={styles.tweetButton} onClick={openAddPostModal}>
        Tweet
      </button>
      {isAddPostModalOpen && (
        <Modal onClose={closeAddPostModal}>
          <AddPost onAdd={closeAddPostModal} />
        </Modal>
      )}
      <div className={styles.userProfile}>
        <Image
          src={profileIcon}
          alt="Profile"
          className={styles.profileImage}
        />
        <div>
          <p className={styles.username}>{user?.fullName}</p>
          <p className={styles.handle}>@{user?.username}</p>
        </div>
      </div>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};
