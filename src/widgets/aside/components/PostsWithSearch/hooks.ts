import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { postAPI } from "@/entities/post/api";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { useQuery } from "@tanstack/react-query";

interface HookOptions {
  enabled: boolean;
}

export const useSuggestedPosts = ({ enabled }: HookOptions) => {
  const { user } = useAuth();
  const username = user?.username || "";

  return useQuery({
    queryKey: [QUERY_KEYS.SUGGESTED_POSTS, username],
    queryFn: () => postAPI.getSuggestedPosts({ username }),
    retry: false,
    enabled,
  });
};

interface SearchHookOptions extends HookOptions {
  queryString: string;
  enabled: boolean;
  username: string;
}

export const useSearchPosts = ({
  queryString,
  enabled,
  username,
}: SearchHookOptions) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SEARCHED_POSTS, queryString],
    queryFn: () => postAPI.searchPosts(queryString, username),
    retry: false,
    enabled,
  });
};
