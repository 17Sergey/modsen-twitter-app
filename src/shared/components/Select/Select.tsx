import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import { THEME_NAMES } from "@/shared/constants";
import { ComponentProps, forwardRef } from "react";
import styles from "./Select.module.scss";

interface SelectProps extends ComponentProps<"select"> {
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, children, ...props }, ref) => {
    const { themeName } = useTheme();

    return (
      <div className={styles.group}>
        <select
          ref={ref}
          className={`${styles.select} ${themeName === THEME_NAMES.DARK && styles.dark}`}
          {...props}
        >
          {children}
        </select>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);

Select.displayName = "Select";
