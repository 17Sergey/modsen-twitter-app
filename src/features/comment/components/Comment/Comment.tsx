import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import { FC } from "react";

import styles from "./Comment.module.scss";

interface CommentProps {
  comment: CommentWithId;
  user: UserWithId;
}

export const Comment: FC<CommentProps> = ({ comment, user }) => {
  const { profileImg, username } = user;
  const { text, img, createdAt } = comment;

  return (
    <div>
      <UserImg src={profileImg} />
      <p>{username}</p>
      <p>{text}</p>
      {img && <img src={img} alt="Post image" className={styles.commentImg} />}
      <p>created at: {createdAt}</p>
    </div>
  );
};
