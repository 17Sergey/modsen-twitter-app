import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { UserImg } from "@/entities/user/components/UserImg/UserImg";
import { FC } from "react";
import DeletePost from "../DeletePost";
import LikePost from "../LikePost";
import PostComments from "../PostComments";

interface PostProps {
  user: UserWithId;
  post: PostWithId;
}

export const Post: FC<PostProps> = ({ user, post }) => {
  const { id: postId, text, img, createdAt, likes } = post;
  const { username, profileImg, id: postOwnerId } = user;

  const { user: currentUser } = useAuth();
  const userId = currentUser?.id || "";

  const isCurrentUserOwner = postOwnerId === userId;

  return (
    <div>
      <UserImg src={profileImg} />
      <p>{username}</p>
      <p>{text}</p>
      {img && <img src={img} alt="Post image" />}
      <p>created at: {createdAt}</p>
      <LikePost postId={postId} likes={likes} />
      <PostComments postId={postId} />
      {isCurrentUserOwner && (
        <DeletePost postId={postId} postOwnerId={postOwnerId} />
      )}
    </div>
  );
};
