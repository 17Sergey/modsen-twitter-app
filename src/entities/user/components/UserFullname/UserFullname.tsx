import { ComponentProps, FC } from "react";

import styles from "./UserFullname.module.scss";

interface UserFullnameProps extends ComponentProps<"p"> {
  fullName: string;
  className?: string;
}

export const UserFullname: FC<UserFullnameProps> = ({
  fullName,
  className = "",
  ...props
}) => (
  <p className={`${styles.fullname} ${className}`} {...props}>
    {fullName}
  </p>
);
