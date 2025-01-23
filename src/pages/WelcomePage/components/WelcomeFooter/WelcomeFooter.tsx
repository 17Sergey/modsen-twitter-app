"use client";

import { ROUTES } from "@/shared/constants/constants";
import Link from "next/link";
import styles from "./WelcomeFooter.module.scss";

export const WelcomeFooter = () => (
  <footer className={styles.links}>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      About
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Help Center
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Terms of Service
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Privacy Policy
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Cookie Policy
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Ads info
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Blog
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Status
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Carrres
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Brand Resources
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Advertsing
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Marketing
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Twitter for Business
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Developers
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Directory
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      Settings
    </Link>
    <Link href={ROUTES.HOME} className={styles.linkItem}>
      © 2025 Twitter, Inc.
    </Link>
  </footer>
);
