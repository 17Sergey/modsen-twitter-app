"use client";

import { useAuth } from "@/appFSD/providers/AuthProvider/useAuth";
import { userAPI } from "@/entities/user/api/userAPI";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useQuery } from "@tanstack/react-query";
import AsideUsers from "../AsideUsers";

export const SuggestedUsers = ({}) => {
  const { user } = useAuth();
  const username = user?.username || "";

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.SUGGESTED_USERS],
    queryFn: () => userAPI.getSuggestedUsers(username),
    retry: false,
  });

  return (
    <AsideUsers
      users={users}
      isLoading={isLoading}
      error={error && error.message}
    />
  );
};
