import { FC } from "react";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import UserFullname from "@/entities/user/components/UserFullname";
import UserImg from "@/entities/user/components/UserImg";
import Username from "@/entities/user/components/Username";
import EditProfileModal from "@/features/profile/EditProfileModal";
import FollowUser from "@/features/user/FollowUser";
import CoverImg from "@/shared/assets/images/profile-cover.jpg";
import Button from "@/shared/components/buttons/Button";
import ToggleTheme from "@/shared/components/ToggleTheme";
import { QUERY_KEYS } from "@/shared/constants";
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
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.overview}>
          <UserFullname fullName={user?.fullName} />
          <p className={styles.tweetsCount}>{user?.postsCount || 0} Tweets</p>
        </div>
        <ToggleTheme />
      </header>
      <div>
        <Image
          className={styles.coverImage}
          src={user?.coverImg || CoverImg}
          alt={"Profile cover"}
        />
        <div className={styles.profileInfo}>
          <div className={styles.profileData}>
            <div className={styles.left}>
              <UserImg src={user?.profileImg} className={styles.profileImage} />
              <UserFullname fullName={user?.fullName} className={styles.name} />
              <Username username={user?.username} className={styles.username} />
              {user?.bio && <p className={styles.bio}>{user?.bio}</p>}
              {user?.link && <p className={styles.link}>Link: {user?.link}</p>}
            </div>
            <div className={styles.right}>
              {isMyProfile && (
                <Button className={styles.editProfile} onClick={openEditModal}>
                  Edit profile
                </Button>
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
          <div className={styles.stats}>
            <span>{user?.followers?.length || 0} Followers</span>
            <span>{user?.following?.length || 0} Following</span>
          </div>
        </div>
      </div>
    </section>
  );
};
