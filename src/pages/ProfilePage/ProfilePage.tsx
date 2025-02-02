"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { userAPI } from "@/entities/user/api/userAPI";
import AddPost from "@/features/post/addPost/components/AddPost";
import { QUERY_KEYS } from "@/shared/constants/constants";
import UserProfile from "@/widgets/UserProfile";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import UserPosts from "./UserPosts";

interface ProfilePageProps {
  username: string;
}

export const ProfilePage: FC<ProfilePageProps> = ({ username }) => {
  const { user: currentUser } = useAuth();

  const { data: fetchedUser, isLoading } = useQuery<UserModel | undefined>({
    queryKey: [QUERY_KEYS.USER_PROFILE, username],
    queryFn: () => userAPI.getProfile(username),
    enabled: !!username,
    retry: false,
  });

  const user = (fetchedUser || currentUser) as UserWithId;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {user && (
        <>
          <UserProfile user={user} />
          {user.username === currentUser?.username && <AddPost />}
          <UserPosts username={user.username} />
        </>
      )}
    </>
  );
};
