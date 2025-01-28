"use client";

import WelcomeContent from "./components/WelcomeContent";
import WelcomeFooter from "./components/WelcomeFooter";

import styles from "./EntryPage.module.scss";

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
