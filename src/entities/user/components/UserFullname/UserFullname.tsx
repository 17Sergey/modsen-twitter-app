import { FC } from "react";

import styles from "./UserFullname.module.scss";

interface UserFullnameProps {
  fullName: string;
  className?: string;
}

export const UserFullname: FC<UserFullnameProps> = ({
  fullName,
  className = "",
}) => <p className={`${styles.fullname} ${className}`}>{fullName}</p>;
