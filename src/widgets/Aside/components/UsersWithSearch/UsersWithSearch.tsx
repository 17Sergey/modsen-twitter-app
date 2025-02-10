"use client";

import Search from "@/shared/components/Search";
import { useState } from "react";
import AsideUsers from "../AsideUsers";
import styles from "./UsersWithSearch.module.scss";
import { useSearchUsers, useSuggestedUsers } from "./hooks";

export const UsersWithSearch = () => {
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
    <div>
      <Search
        onQueryChanged={handleQueryChange}
        isDebounced={true}
        placeholder={"Search users..."}
      />
      <div className={styles.aside}>
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
