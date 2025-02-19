"use client";

import UserFullname from "@/entities/user/components/UserFullname";
import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import Username from "@/entities/user/components/Username";
import FollowUser from "@/features/user/FollowUser";
import { ROUTES } from "@/shared/constants";
import Link from "next/link";
import { FC } from "react";
import styles from "./AsideUser.module.scss";

interface AsideUserProps {
  userId: UserWithId["id"];
  profileImg: UserWithId["profileImg"];
  fullName: UserWithId["fullName"];
  username: UserWithId["username"];
  followers: UserWithId["followers"];
}

export const AsideUser: FC<AsideUserProps> = ({
  userId,
  profileImg,
  fullName,
  username,
  followers,
}) => (
  <div className={styles.container}>
    <div className={styles.user}>
      <UserImg src={profileImg} />
      <div>
        <Link href={`${ROUTES.PROFILE}/${username}`}>
          <UserFullname fullName={fullName} />
        </Link>
        <Username username={username} />
      </div>
    </div>
    <FollowUser userId={userId} followers={followers} />
  </div>
);
