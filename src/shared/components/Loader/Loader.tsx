import { FC } from "react";

import LoaderIcon from "@/shared/assets/loader.svg";
import Image from "next/image";
import styles from "./Loader.module.scss";

type LoaderVariants = "sm" | "md" | "lg";

interface LoaderProps {
  variant: LoaderVariants;
}

export const Loader: FC<LoaderProps> = ({ variant = "md" }) => (
  <div className={`${styles.loader} ${styles[variant]}`}>
    <Image src={LoaderIcon} alt="loader" />
  </div>
);
