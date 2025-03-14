"use client";

import Loader from "@/shared/components/Loader";
import { FC } from "react";
import { AsideUser } from "../AsideUser/AsideUser";
import { DATA_CY } from "@/shared/constants";

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
        <Loader variant="md" />
      </>
    );

  if (error) return <div>Error while loading: {error}</div>;

  if (users && users.length === 0) return <div>Nothing to suggest yet</div>;

  if (users) {
    return (
      <ul data-cy={DATA_CY.ASIDE.USERS_LIST}>
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
      </ul>
    );
  }
};
