"use client";

import { ROUTES } from "@/shared/constants/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./AsidePostImage.module.scss";

interface AsidePostImageProps {
  post: PostWithId;
}

export const AsidePostImage: FC<AsidePostImageProps> = ({ post }) => {
  const { img, id: postId } = post;
  const postRoute = `${ROUTES.POSTS}/${postId}`;

  const router = useRouter();

  const handleClick = () => {
    router.push(postRoute);
  };

  return (
    <div className={styles.container}>
      <Link href={postRoute} onClick={handleClick}>
        <img
          src={img}
          width={80}
          height={80}
          alt="Post image"
          className={styles.image}
        />
      </Link>
    </div>
  );
};
