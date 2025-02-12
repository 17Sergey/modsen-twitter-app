import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import { THEME_NAMES } from "@/shared/constants";
import { FC } from "react";
import { ButtonProps } from "../types";
import styles from "./Button.module.scss";

export const Button: FC<ButtonProps> = ({
  className,
  children,
  disabled = false,
  ...props
}) => {
  const { themeName } = useTheme();

  return (
    <button
      className={`${styles.button} ${className} ${themeName === THEME_NAMES.DARK && styles.dark}`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
