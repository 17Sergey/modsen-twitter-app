import { ComponentProps, FC } from "react";
import Button from "../Button";
import styles from "./FollowButton.module.scss";

interface FollowButtonProps extends ComponentProps<"button"> {
  isFollowing: boolean;
  isLoading?: boolean;
}

export const FollowButton: FC<FollowButtonProps> = ({
  isFollowing,
  isLoading,
  ...props
}) => {
  return (
    <Button
      className={`${styles.followButton} ${isFollowing ? styles.following : styles.notFollowing}`}
      {...props}
    >
      {isFollowing ? "Unfollow" : "Follow"}
      {isLoading && <span>spin</span>}
    </Button>
  );
};
