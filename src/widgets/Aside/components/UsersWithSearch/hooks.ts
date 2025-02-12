import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { userAPI } from "@/entities/user/api/userAPI";
import { QUERY_KEYS } from "@/shared/constants";
import { useQuery } from "@tanstack/react-query";

interface HookOptions {
  enabled: boolean;
}

export const useSuggestedUsers = ({ enabled }: HookOptions) => {
  const { user } = useAuth();
  const username = user?.username || "";

  return useQuery({
    queryKey: [QUERY_KEYS.SUGGESTED_USERS],
    queryFn: () => userAPI.getSuggestedUsers(username),
    retry: false,
    enabled,
  });
};

interface SearchHookOptions extends HookOptions {
  queryString: string;
  enabled: boolean;
}

export const useSearchUsers = ({ queryString, enabled }: SearchHookOptions) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCHED_USERS, queryString],
    queryFn: () => userAPI.searchUsers(queryString),
    retry: false,
    enabled,
  });
};
