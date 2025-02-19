"use client";

import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { pathHelpers } from "@/shared/utils/pathHelpers";
import { usePathname } from "next/navigation";
import PostsWithSearch from "../PostsWithSearch";
import UsersWithSearch from "../UsersWithSearch";

export const Aside = () => {
  const { user } = useAuth();
  const username = user?.username || "";

  const pathname = usePathname() as string;

  const isCurrentUserProfile = pathHelpers.isCurrentUserProfile(pathname);
  const isOtherUserProfile = pathHelpers.isOtherUserProfile(pathname);
  const isPostPage = pathHelpers.isPostPath(pathname);

  const otherUsername = pathHelpers.getUsernameFromPath(pathname) || "";

  if (isCurrentUserProfile || isOtherUserProfile || isPostPage) {
    return (
      <PostsWithSearch
        username={isCurrentUserProfile ? username : otherUsername}
      />
    );
  }

  return <UsersWithSearch />;
};
