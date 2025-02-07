import { FC } from "react";
import PrimaryButton from "../PrimaryButton";
import { ButtonProps } from "../types";
import styles from "./ActionButton.module.scss";

export const ActionButton: FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <PrimaryButton className={`${styles.button} ${className}`} {...props}>
      {children}
    </PrimaryButton>
  );
};
