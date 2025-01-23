"use client";

import styles from "./WelcomeContent.module.scss";

import TwitterIcon from "@/shared/assets/twitter.svg";
import TwitterPhoto from "@/shared/assets/twitter.webp";
import { ROUTES } from "@/shared/constants/constants";
import Image from "next/image";
import Link from "next/link";

export const WelcomeContent = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={TwitterPhoto}
          alt={"Twitter logo"}
          priority
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
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
        <div className={styles.buttons}>
          <Link href={ROUTES.SIGNUP} className={styles.button}>
            Sign up with Google
          </Link>
          <Link href={ROUTES.SIGNUP} className={styles.button}>
            Sign up with email
          </Link>
        </div>
        <p className={styles.terms}>
          By signing up, you agree to the{" "}
          <a href={ROUTES.HOME}>Terms of Service</a> and{" "}
          <a href={ROUTES.HOME}>Privacy Policy</a>, including{" "}
          <a href={ROUTES.HOME}>Cookie use</a>
        </p>
        <p className={styles.login}>
          Already have an account? <Link href={ROUTES.LOGIN}>Log in</Link>
        </p>
      </div>
    </section>
  );
};
