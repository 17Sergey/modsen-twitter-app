import { ComponentProps, FC } from "react";

import ProfileIcon from "@/shared/assets/sidebar/profile.svg";
import Image from "next/image";
import styles from "./UserImg.module.scss";

export const UserImg: FC<ComponentProps<"img">> = ({
  src,
  alt,
  className,
  ...props
}) => {
  return (
    <Image
      {...props}
      width={16}
      height={16}
      src={src || ProfileIcon}
      className={`${styles.img} ${className}`}
      alt={alt || "User profile"}
    />
  );
};
