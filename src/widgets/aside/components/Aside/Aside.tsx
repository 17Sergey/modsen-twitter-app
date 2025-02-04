"use client";

import SuggestedUsers from "../SuggestedUsers";
import styles from "./Aside.module.scss";

export const Aside = () => (
  <div className={styles.aside}>
    You might like
    <SuggestedUsers />
  </div>
);
