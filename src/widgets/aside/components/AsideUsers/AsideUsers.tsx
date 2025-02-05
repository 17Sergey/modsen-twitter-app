"use client";

import { FC } from "react";
import { AsideUser } from "../AsideUser/AsideUser";

interface AsideUsersProps {
  users: UserWithId[] | undefined;
  isLoading: boolean;
  error: string | null;
}

export const AsideUsers: FC<AsideUsersProps> = ({
  users,
  isLoading,
  error,
}) => {
  if (isLoading)
    return (
      <>
        <p>Skeleton for user...</p>
        <p>Skeleton for user...</p>
        <p>Skeleton for user...</p>
        <p>Skeleton for user...</p>
        <p>Skeleton for user...</p>
      </>
    );

  if (error) return <div>Error while loading: {error}</div>;

  if (users && users.length === 0) return <div>Nothing to suggest yet</div>;

  if (users) {
    return (
      <>
        {users.map(({ id, profileImg, fullName, username, followers }) => (
          <AsideUser
            key={id}
            userId={id}
            profileImg={profileImg}
            fullName={fullName}
            username={username}
            followers={followers}
          />
        ))}
      </>
    );
  }
};
