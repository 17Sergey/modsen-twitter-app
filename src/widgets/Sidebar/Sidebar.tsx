"use client";

import { useAuth } from "@/appFSD/providers/AuthProvider/useAuth";

import TwitterLogo from "@/shared/assets/twitter.svg";
import { ROUTES } from "@/shared/constants/constants";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import styles from "./Sidebar.module.scss";
import SidebarItems from "./SidebarItems";
import SidebarUser from "./SidebarUser";
import TweetButton from "./TweetButton";

export const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <Link href={ROUTES.FEED}>
        <Image
          className={styles.sidebarImage}
          src={TwitterLogo}
          alt={"Twitter logo"}
          width={24}
          height={24}
        />
      </Link>
      <div className={styles.sidebar}>
        <SidebarItems />
        <TweetButton />
        <SidebarUser user={user as UserWithId} />
        <LogoutButton />
      </div>
    </div>
  );
};
