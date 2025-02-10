"use client";

import LoginWithGoogle from "@/shared/components/LoginWithGoogle";
import { ROUTES } from "@/shared/constants/constants";
import Link from "next/link";
import styles from "./AuthControls.module.scss";

export const AuthControls = () => (
  <div className={styles.buttons}>
    <LoginWithGoogle />
    <Link href={ROUTES.SIGNUP} className={styles.button}>
      Sign up with email
    </Link>
  </div>
);
