"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { userAPI } from "@/entities/user/api/userAPI";
import profileIcon from "@/shared/assets/sidebar/profile.svg";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { FC, useState } from "react";
import EditProfileModal from "./EditProfileModal";
import styles from "./ProfilePage.module.scss";

interface ProfilePageProps {
  username: string;
}

export const ProfilePage: FC<ProfilePageProps> = ({ username }) => {
  const { user: currentUser } = useAuth();
  const [isEditProfile, setIsEditProfile] = useState(false);

  const closeEditModal = () => {
    setIsEditProfile(false);
  };

  const openEditModal = () => {
    setIsEditProfile(true);
  };

  const { data: fetchedUser, isLoading } = useQuery<UserModel | undefined>({
    queryKey: ["userProfile", username],
    queryFn: () => userAPI.getProfile(username),
    enabled: !!username,
    retry: false,
  });

  const user = fetchedUser || currentUser;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.profileImage}>
          <Image
            src={user?.profileImg || profileIcon}
            alt={"Profile picture"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>{user?.fullName}</h2>
          <span className={styles.username}>@{user?.username}</span>
          <p className={styles.position}>{user?.email}</p>
          <div className={styles.stats}>
            <span>{user?.following?.length || 0} Following</span>
            <span>{user?.followers?.length || 0} Followers</span>
          </div>
          {currentUser?.username === user?.username && (
            <button className={styles.editProfile} onClick={openEditModal}>
              Edit profile
            </button>
          )}
          {isEditProfile && user && (
            <EditProfileModal user={user} onClose={closeEditModal} />
          )}
        </div>
      </div>
      <div className={styles.tweetsCount}>
        <span>{user?.postsCount || 0} Tweets</span>
      </div>
    </div>
  );
};
