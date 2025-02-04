import { FC } from "react";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import EditProfileModal from "@/features/profile/EditProfileModal";
import FollowUser from "@/features/user/FollowUser";
import ProfileIcon from "@/shared/assets/sidebar/profile.svg";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useModal } from "@/shared/hooks/useModal";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import styles from "./UserProfile.module.scss";

interface UserProfileProps {
  user: UserWithId;
}

export const UserProfile: FC<UserProfileProps> = ({ user }) => {
  const { user: currentUser } = useAuth();

  // debugger;

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
      <div className={styles.header}>
        <div className={styles.profileImage}>
          <Image
            src={user?.profileImg || ProfileIcon}
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
            <span>{user?.followers?.length || 0} Followers</span>
            <span>{user?.following?.length || 0} Following</span>
          </div>
          <div>{user?.bio}</div>
          <div>
            {user?.link && (
              <Link href={user.link} target="_blank" rel="norefferer noopener">
                User link
              </Link>
            )}
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
