import { FC } from "react";

import { ICONS } from "@/shared/constants";
import IconMatcher from "../icons/IconMatcher";
import styles from "./Loader.module.scss";

type LoaderVariants = "sm" | "md" | "lg";

interface LoaderProps {
  variant: LoaderVariants;
  loaderIconClassName?: string;
}

export const Loader: FC<LoaderProps> = ({
  variant = "md",
  loaderIconClassName = "",
}) => (
  <div className={`${styles.loader} ${styles[variant]}`}>
    <IconMatcher
      name={ICONS.LOADER}
      className={`${styles.loaderIcon} ${loaderIconClassName}`}
    />
  </div>
);
