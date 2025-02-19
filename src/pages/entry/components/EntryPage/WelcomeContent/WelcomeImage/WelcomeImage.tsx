"use client";

import TwitterPhoto from "@/shared/assets/images/twitter.webp";
import Image from "next/image";
import styles from "./WelcomeImage.module.scss";

export const WelcomeImage = () => (
  <div className={styles.imageContainer}>
    <Image
      src={TwitterPhoto}
      alt={"Twitter logo"}
      priority
      width={500}
      height={500}
      className={styles.image}
      unoptimized={true}
    />
  </div>
);
