import SearchIcon from "@/shared/assets/search.svg";
import { useDebounce } from "@/shared/hooks/useDebounce";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  onQueryChanged: (query: string) => void;
  isDebounced?: boolean;
  placeholder?: string;
}

export const Search: FC<SearchProps> = ({
  onQueryChanged,
  isDebounced = false,
  placeholder = "Search...",
}) => {
  const [query, setQuery] = useState<string>("");
  const callbackRef = useRef(onQueryChanged);

  const debouncedQuery = useDebounce(query, isDebounced ? 300 : 0);

  useEffect(() => {
    callbackRef.current?.(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <Image src={SearchIcon} width={24} height={24} alt="Search" />
    </div>
  );
};
