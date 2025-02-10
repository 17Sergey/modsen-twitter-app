import { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../types";
import styles from "./ActionButton.module.scss";

export const ActionButton: FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button className={`${styles.actionButton} ${className}`} {...props}>
      {children}
    </Button>
  );
};
