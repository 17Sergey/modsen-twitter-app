import { FC } from "react";
import Button from "../Button";
import primaryButtonStyles from "../PrimaryButton/PrimaryButton.module.scss";
import { ButtonProps } from "../types";
import styles from "./ActionButton.module.scss";

export const ActionButton: FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => (
  <Button
    className={`${styles.actionButton} ${primaryButtonStyles.primaryButton} ${className}`}
    {...props}
  >
    {children}
  </Button>
);
