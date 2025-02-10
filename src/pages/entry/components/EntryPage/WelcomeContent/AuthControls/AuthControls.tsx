"use client";

import LinkButton from "@/shared/components/buttons/LinkButton";
import LoginWithGoogle from "@/shared/components/LoginWithGoogle";
import { ROUTES } from "@/shared/constants/constants";
import styles from "./AuthControls.module.scss";

export const AuthControls = () => (
  <div className={styles.buttons}>
    <LoginWithGoogle />
    <LinkButton href={ROUTES.SIGNUP} className={styles.button}>
      Sign up with email
    </LinkButton>
  </div>
);
