import buttonStyles from "@/shared/components/buttons/Button/Button.module.scss";
import Link from "next/link";
import { ComponentProps, FC } from "react";
import styles from "./LinkButton.module.scss";

type LinkButtonProps = ComponentProps<typeof Link>;

export const LinkButton: FC<LinkButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link
      className={`${buttonStyles.button} ${styles.linkButton} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};
