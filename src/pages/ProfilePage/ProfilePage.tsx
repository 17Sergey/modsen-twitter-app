"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { userAPI } from "@/entities/user/api/userAPI";
import AddPost from "@/features/post/addPost/components/AddPost";
import Loader from "@/shared/components/Loader";
import { QUERY_KEYS } from "@/shared/constants";
import UserProfile from "@/widgets/UserProfile";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import styles from "./ProfilePage.module.scss";
import UserPosts from "./UserPosts";

interface ProfilePageProps {
  username?: string;
}

export const ProfilePage: FC<ProfilePageProps> = ({ username }) => {
  const { user: currentUser } = useAuth();

  const currentUsername = username || currentUser?.username || "";

  const {
    data: fetchedUser,
    isLoading,
    error,
  } = useQuery<UserModel | undefined>({
    queryKey: [QUERY_KEYS.USER_PROFILE, currentUsername],
    queryFn: () => userAPI.getProfile(currentUsername),
    enabled: !!currentUsername,
    retry: false,
  });

  const user = (fetchedUser || currentUser) as UserWithId;
  const isCurrentUser = user.username === currentUser?.username;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader variant="lg" />
      </div>
    );

  return (
    <>
      {user && (
        <>
          <UserProfile user={user} />
          <div className={styles.gap}></div>
          {isCurrentUser && (
            <div className={styles.addPost}>
              <AddPost />
            </div>
          )}
          <UserPosts username={user.username} />
        </>
      )}
    </>
  );
};
