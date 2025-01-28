"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import styles from "./Sidebar.module.scss";

import { authAPI } from "@/pages/EntryPage/api/auth";
import bookmarksIcon from "@/shared/assets/sidebar/bookmarks.svg";
import exploreIcon from "@/shared/assets/sidebar/explore.svg";
import homeIcon from "@/shared/assets/sidebar/home.svg";
import listsIcon from "@/shared/assets/sidebar/lists.svg";
import messagesIcon from "@/shared/assets/sidebar/messages.svg";
import moreIcon from "@/shared/assets/sidebar/more.svg";
import notificationsIcon from "@/shared/assets/sidebar/notifications.svg";
import profileIcon from "@/shared/assets/sidebar/profile.svg";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import toast from "react-hot-toast";

// const SIDEBAR_ITEMS = [{ label: "Home", icon: homeIcon }];

export const Sidebar = () => {
  const { user, setCurrentUser } = useAuth();

  const { mutate } = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      toast.success("Logged out successfully");
      setCurrentUser(null);
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
        <SidebarItem icon={homeIcon} label="Home" />
        <SidebarItem icon={exploreIcon} label="Explore" />
        <SidebarItem icon={notificationsIcon} label="Notifications" />
        <SidebarItem icon={messagesIcon} label="Messages" />
        <SidebarItem icon={bookmarksIcon} label="Bookmarks" />
        <SidebarItem icon={listsIcon} label="Lists" />
        <SidebarItem icon={profileIcon} label="Profile" />
        <SidebarItem icon={moreIcon} label="More" />
      </div>
      <button className={styles.tweetButton}>Tweet</button>
      <div className={styles.userProfile}>
        <Image
          src={profileIcon}
          alt="Profile"
          className={styles.profileImage}
        />
        <div>
          <p className={styles.username}>Bobur</p>
          <p className={styles.handle}>@{user?.email}</p>
        </div>
      </div>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

const SidebarItem = ({ icon, label }: { icon: string; label: string }) => (
  <div className={styles.sidebarItem}>
    <Image src={icon} alt={`${label} icon`} className={styles.icon} />
    <span>{label}</span>
  </div>
);
