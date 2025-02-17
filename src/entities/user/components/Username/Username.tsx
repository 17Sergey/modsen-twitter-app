import { ComponentProps, FC } from "react";

import styles from "./Username.module.scss";

interface UsernameProps extends ComponentProps<"p"> {
  username: string;
  className?: string;
}

export const Username: FC<UsernameProps> = ({
  username,
  className = "",
  ...props
}) => (
  <p className={`${styles.username} ${className}`} {...props}>
    @{username}
  </p>
);
