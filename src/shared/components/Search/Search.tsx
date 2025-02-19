import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import SearchIcon from "@/shared/assets/search.svg";
import { THEME_NAMES } from "@/shared/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  onQueryChanged: (query: string) => void;
  isDebounced?: boolean;
  placeholder?: string;
  testId?: string;
}

export const Search: FC<SearchProps> = ({
  onQueryChanged,
  isDebounced = false,
  placeholder = "Search...",
  testId = "",
}) => {
  const { themeName } = useTheme();

  const [query, setQuery] = useState<string>("");
  const callbackRef = useRef(onQueryChanged);

  const debouncedQuery = useDebounce(query, isDebounced ? 300 : 0);

  useEffect(() => {
    callbackRef.current?.(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div
      className={`${styles.search} ${themeName === THEME_NAMES.DARK && styles.dark}`}
    >
      <Image src={SearchIcon} width={20} height={20} alt="Search" />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
        data-cy={testId}
      />
    </div>
  );
};
