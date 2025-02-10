import { FC } from "react";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import UserImg from "@/entities/user/components/UserImg";
import EditProfileModal from "@/features/profile/EditProfileModal";
import FollowUser from "@/features/user/FollowUser";
import CoverImg from "@/shared/assets/images/profile-cover.jpg";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useModal } from "@/shared/hooks/useModal";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import styles from "./UserProfile.module.scss";

interface UserProfileProps {
  user: UserWithId;
}

export const UserProfile: FC<UserProfileProps> = ({ user }) => {
  const { user: currentUser } = useAuth();

  const {
    isOpen: isEditProfile,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();

  const isMyProfile = currentUser?.username === user?.username;

  const queryClient = useQueryClient();

  const handleFollowSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.USER_PROFILE, user.username],
    });
  };

  return (
    <div className={styles.profile}>
      <Image
        className={styles.coverImage}
        src={user?.coverImg || CoverImg}
        alt={"Profile cover"}
      />
      <div className={styles.header}>
        <UserImg src={user?.profileImg} className={styles.profileImage} />
        <div className={styles.profileInfo}>
          <h2 className={styles.name}>{user?.fullName}</h2>
          <span className={styles.username}>@{user?.username}</span>
          <p className={styles.position}>{user?.email}</p>
          <p className={styles.position}>{user?.bio}</p>
          <p className={styles.position}>{user?.link}</p>
          <div className={styles.stats}>
            <span>{user?.followers?.length || 0} Followers</span>
            <span>{user?.following?.length || 0} Following</span>
          </div>
          {isMyProfile && (
            <button className={styles.editProfile} onClick={openEditModal}>
              Edit profile
            </button>
          )}
          {isEditProfile && user && (
            <EditProfileModal user={user} onClose={closeEditModal} />
          )}
          {!isMyProfile && (
            <FollowUser
              userId={user.id}
              followers={user.followers}
              onSuccess={handleFollowSuccess}
            />
          )}
        </div>
      </div>
      <div className={styles.tweetsCount}>
        <span>{user?.postsCount || 0} Tweets</span>
      </div>
    </div>
  );
};
