import { ComponentProps, forwardRef } from "react";
import styles from "./Select.module.scss";

interface SelectProps extends ComponentProps<"select"> {
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, children, ...props }, ref) => {
    return (
      <div className={styles.group}>
        <select ref={ref} className={styles.select} {...props}>
          {children}
        </select>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);

Select.displayName = "Select";
