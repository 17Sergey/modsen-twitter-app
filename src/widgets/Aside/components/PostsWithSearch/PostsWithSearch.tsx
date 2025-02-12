"use client";

import Search from "@/shared/components/Search";
import { FC, useState } from "react";
import asideStyles from "../Aside/Aside.module.scss";
import AsidePosts from "../AsidePosts";
import { useSearchPosts, useSuggestedPosts } from "./hooks";
import styles from "./PostsWithSearch.module.scss";
import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import { THEME_NAMES } from "@/shared/constants";

interface PostsWithSearchProps {
  username: string;
}

export const PostsWithSearch: FC<PostsWithSearchProps> = ({ username }) => {
  const { themeName } = useTheme();

  const [query, setQuery] = useState("");
  const isQueryEmpty = query === "";

  const handleQueryChange = (inputQuery: string) => {
    setQuery(inputQuery);
  };

  const {
    data: suggestedPosts,
    isLoading: isLoadingSuggeted,
    error: suggestedError,
  } = useSuggestedPosts({ enabled: isQueryEmpty });

  const {
    data: foundPosts,
    isLoading: isSearching,
    error: searchError,
  } = useSearchPosts({ queryString: query, enabled: !isQueryEmpty, username });

  let displayedPosts = suggestedPosts;
  let isLoading = isLoadingSuggeted;
  let error = suggestedError;

  if (!isQueryEmpty) {
    displayedPosts = foundPosts;
    isLoading = isSearching;
    error = searchError;
  }

  return (
    <div className={asideStyles.container}>
      <Search
        onQueryChanged={handleQueryChange}
        isDebounced={true}
        placeholder={"Search posts..."}
      />
      <div
        className={`${asideStyles.content} ${themeName === THEME_NAMES.DARK && asideStyles.darkContent}`}
      >
        <span className={styles.suggest}>
          {isQueryEmpty ? "You might like" : "Search results"}
        </span>
        <AsidePosts
          postsData={displayedPosts}
          isLoading={isLoading}
          error={error && error.message}
          withPostText={!isQueryEmpty}
        />
      </div>
    </div>
  );
};
