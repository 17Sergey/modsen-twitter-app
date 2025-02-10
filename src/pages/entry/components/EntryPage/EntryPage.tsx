"use client";

import WelcomeFooter from "./WelcomeFooter";

import styles from "./EntryPage.module.scss";
import WelcomeContent from "./WelcomeContent";

export const EntryPage = () => (
  <div className={styles.wrapper}>
    <main className={styles.main}>
      <WelcomeContent />
    </main>
    <footer>
      <WelcomeFooter />
    </footer>
  </div>
);
