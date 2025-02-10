"use client";

import TwitterIcon from "@/shared/assets/twitter.svg";
import { ROUTES } from "@/shared/constants/constants";
import Image from "next/image";
import Link from "next/link";
import AuthControls from "./AuthControls";
import styles from "./WelcomeContent.module.scss";
import WelcomeImage from "./WelcomeImage";

export const WelcomeContent = () => (
  <section className={styles.wrapper}>
    <WelcomeImage />
    <div className={styles.content}>
      <div className={styles.logo}>
        <Image
          src={TwitterIcon}
          alt={"Twitter icon"}
          width={24}
          height={24}
          className={styles.icon}
        />
      </div>
      <span className={styles.span}>Happening now</span>
      <h1 className={styles.heading}>Join Twitter today</h1>
      <AuthControls />
      <p className={styles.terms}>
        By signing up, you agree to the{" "}
        <a href={ROUTES.ENTRY}>Terms of Service</a> and{" "}
        <a href={ROUTES.ENTRY}>Privacy Policy</a>, including{" "}
        <a href={ROUTES.ENTRY}>Cookie use</a>
      </p>
      <p className={styles.login}>
        Already have an account? <Link href={ROUTES.LOGIN}>Log in</Link>
      </p>
    </div>
  </section>
);
