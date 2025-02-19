"use client";

import Username from "@/entities/user/components/Username";
import { ROUTES } from "@/shared/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./AsidePost.module.scss";

interface AsidePostProps {
  post: PostWithId;
  user: UserWithId;
}

export const AsidePost: FC<AsidePostProps> = ({ post, user }) => {
  const { img, id: postId } = post;
  const { username } = user;

  const postRoute = `${ROUTES.POSTS}/${postId}`;

  const router = useRouter();

  const handleClick = () => {
    router.push(postRoute);
  };

  return (
    <div className={styles.container}>
      <Link href={postRoute} onClick={handleClick}>
        <Username username={username} />
        <div className={styles.text}>
          <p>{post.text}</p>
        </div>
        {img && (
          <img
            src={img}
            width={80}
            height={80}
            alt="Post image"
            className={styles.image}
          />
        )}
      </Link>
    </div>
  );
};
