"use client";

import ToggleTheme from "@/shared/components/ToggleTheme";
import styles from "./FeedPage.module.scss";
import FeedPosts from "./FeedPosts";

export const FeedPage = () => (
  <div>
    <header className={styles.header}>
      <h1 className={styles.heading}>Home</h1>
      <ToggleTheme />
    </header>
    <FeedPosts />
  </div>
);
