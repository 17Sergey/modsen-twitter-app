import { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../types";
import styles from "./SecondaryButton.module.scss";

export const SecondaryButton: FC<ButtonProps> = ({
  className,
  children,
  disabled = false,
  ...props
}) => (
  <Button
    className={`${styles.secondaryButton} ${className}`}
    {...props}
    disabled={disabled}
  >
    {children}
  </Button>
);
