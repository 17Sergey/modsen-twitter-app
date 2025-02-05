"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { ROUTES } from "@/shared/constants/constants";
import { usePathname } from "next/navigation";
import PostsWithSearch from "../PostsWithSearch";
import UsersWithSearch from "../UsersWithSearch";

const isProfilePath = (pathname: string | null) => pathname === ROUTES.PROFILE;

const isOtherUserProfilePath = (pathname: string | null) =>
  pathname?.startsWith(ROUTES.PROFILE) && pathname?.split("/").length === 3;

const getOtherUsername = (pathname: string | null) =>
  pathname?.split("/").pop();

export const Aside = () => {
  const { user } = useAuth();
  const username = user?.username || "";

  const pathname = usePathname();

  const isProfile = isProfilePath(pathname);
  const isOtherUserProfile = isOtherUserProfilePath(pathname);

  const otherUsername = getOtherUsername(pathname) || "";

  if (isProfile || isOtherUserProfile) {
    return (
      <PostsWithSearch
        username={isOtherUserProfile ? otherUsername : username}
      />
    );
  }

  return <UsersWithSearch />;
};
