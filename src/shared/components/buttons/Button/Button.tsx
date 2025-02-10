import { FC } from "react";
import { ButtonProps } from "../types";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
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
