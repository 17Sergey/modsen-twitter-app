import { FC } from "react";
import { ButtonProps } from "../types";
import styles from "./PrimaryButton.module.scss";

export const PrimaryButton: FC<ButtonProps> = ({
  className,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
