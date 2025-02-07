import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import { FC } from "react";

import UserFullname from "@/entities/user/components/UserFullname";
import Username from "@/entities/user/components/Username";
import FormattedDate from "@/shared/components/FormattedDate";
import styles from "./Comment.module.scss";

interface CommentProps {
  comment: CommentWithId;
  user: UserWithId;
}

export const Comment: FC<CommentProps> = ({ comment, user }) => {
  const { profileImg, username, fullName } = user;
  const { text, img, createdAt } = comment;

  return (
    <div className={styles.comment}>
      <UserImg src={profileImg} />
      <div>
        <div className={styles.meta}>
          <UserFullname fullName={fullName} />
          <Username username={username} />
          <FormattedDate date={new Date(createdAt)} />
        </div>

        <p>{text}</p>
        {img && (
          <img src={img} alt="Post image" className={styles.commentImg} />
        )}
      </div>
    </div>
  );
};
