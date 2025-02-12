"use client";

import NotFoundImage from "@/shared/assets/images/notfound.png";
import LinkButton from "@/shared/components/buttons/LinkButton";
import { ROUTES } from "@/shared/constants";
import Image from "next/image";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <LinkButton href={ROUTES.FEED} className={styles.button}>
        Go to Home Page
      </LinkButton>
      <div className={styles.imgContainer}>
        <Image src={NotFoundImage} alt="Not Found" className={styles.image} />
      </div>
    </div>
  );
};
