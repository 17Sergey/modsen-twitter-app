"use client";

import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import Search from "@/shared/components/Search";
import { DATA_CY, THEME_NAMES } from "@/shared/constants";
import { useState } from "react";
import asideStyles from "../Aside/Aside.module.scss";
import AsideUsers from "../AsideUsers";
import { useSearchUsers, useSuggestedUsers } from "./hooks";
import styles from "./UsersWithSearch.module.scss";

export const UsersWithSearch = () => {
  const { themeName } = useTheme();

  const [query, setQuery] = useState("");
  const isQueryEmpty = query === "";

  const handleQueryChange = (inputQuery: string) => {
    setQuery(inputQuery);
  };

  const {
    data: suggestedUsers,
    isLoading: isLoadingSuggeted,
    error: suggestedError,
  } = useSuggestedUsers({ enabled: isQueryEmpty });

  const {
    data: foundUsers,
    isLoading: isSearching,
    error: searchError,
  } = useSearchUsers({ queryString: query, enabled: !isQueryEmpty });

  let displayedUsers = suggestedUsers;
  let isLoading = isLoadingSuggeted;
  let error = suggestedError;

  if (!isQueryEmpty) {
    displayedUsers = foundUsers;
    isLoading = isSearching;
    error = searchError;
  }

  return (
    <div className={asideStyles.container}>
      <Search
        onQueryChanged={handleQueryChange}
        isDebounced={true}
        placeholder={"Search users..."}
        testId={DATA_CY.ASIDE.USERS_SEARCH}
      />
      <div
        className={`${asideStyles.content} ${themeName === THEME_NAMES.DARK && asideStyles.darkContent}`}
      >
        <span className={styles.suggest}>
          {isQueryEmpty ? "You might like" : "Search results"}
        </span>
        <AsideUsers
          users={displayedUsers}
          isLoading={isLoading}
          error={error && error.message}
        />
      </div>
    </div>
  );
};
