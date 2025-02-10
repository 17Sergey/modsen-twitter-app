import { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../types";
import styles from "./PrimaryButton.module.scss";

export const PrimaryButton: FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button className={`${styles.primaryButton} ${className}`} {...props}>
      {children}
    </Button>
  );
};
