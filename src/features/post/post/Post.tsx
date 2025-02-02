import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import Image from "next/image";
import { FC } from "react";

interface PostProps {
  user: UserWithId;
  post: PostWithId;
}

export const Post: FC<PostProps> = ({ user, post }) => {
  const { text, img, createdAt } = post;
  const { username, profileImg } = user;

  return (
    <div>
      <UserImg src={profileImg} />
      <p>{username}</p>
      <p>{text}</p>
      {img && <Image src={img} alt="Post image" />}
      <p>created at: {createdAt}</p>
    </div>
  );
};
