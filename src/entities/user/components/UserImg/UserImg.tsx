"use client";

import { ComponentProps, FC } from "react";

import ProfileImg from "@/shared/assets/images/avatar.png";
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
      src={src || ProfileImg}
      className={`${styles.img} ${className}`}
      alt={alt || "User profile"}
      unoptimized={true}
    />
  );
};
