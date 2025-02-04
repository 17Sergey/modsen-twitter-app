import { FC } from "react";

import styles from "./Username.module.scss";

interface UsernameProps {
  username: string;
  className?: string;
}

export const Username: FC<UsernameProps> = ({ username, className = "" }) => (
  <p className={`${styles.username} ${className}`}>@{username}</p>
);
