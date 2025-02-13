import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import { THEME_NAMES } from "@/shared/constants";
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
  className,
  ...props
}) => {
  const { themeName } = useTheme();

  return (
    <Button
      className={`${styles.followButton} ${isFollowing ? styles.following : styles.notFollowing} ${themeName === THEME_NAMES.DARK && styles.dark} ${className}`}
      {...props}
    >
      {isFollowing ? "Unfollow" : "Follow"}
      {isLoading && <span>ing...</span>}
    </Button>
  );
};
