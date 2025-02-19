import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import UserFullname from "@/entities/user/components/UserFullname";
import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import Username from "@/entities/user/components/Username";
import FormattedDate from "@/shared/components/FormattedDate";
import { ROUTES } from "@/shared/constants";
import Link from "next/link";
import { FC } from "react";
import DeletePost from "../DeletePost";
import LikePost from "../LikePost";
import PostComments from "../PostComments";
import styles from "./Post.module.scss";

interface PostProps {
  user: UserWithId;
  post: PostWithId;
}

export const Post: FC<PostProps> = ({ user, post }) => {
  const { id: postId, text, img, createdAt, likes } = post;
  const { username, fullName, profileImg, id: postOwnerId } = user;

  const { user: currentUser } = useAuth();
  const userId = currentUser?.id || "";

  const isCurrentUserOwner = postOwnerId === userId;

  return (
    <div className={styles.post}>
      <Link
        href={`${ROUTES.PROFILE}/${username}`}
        className={styles.postImageLink}
      >
        <UserImg src={profileImg} />
      </Link>
      <div>
        <div className={styles.meta}>
          <UserFullname fullName={fullName} />
          <Link href={`${ROUTES.PROFILE}/${username}`}>
            <Username username={username} />
          </Link>
          <FormattedDate date={new Date(createdAt)} />
        </div>

        <p>{text}</p>
        {img && <img src={img} alt="Post image" className={styles.postImg} />}

        <div className={styles.controls}>
          <LikePost postId={postId} likes={likes} />
          <PostComments postId={postId} />
          {isCurrentUserOwner && (
            <DeletePost postId={postId} postOwnerId={postOwnerId} />
          )}
        </div>
      </div>
    </div>
  );
};
