import UserFullname from "@/entities/user/components/UserFullname";
import UserImg from "@/entities/user/components/UserImg";
import Username from "@/entities/user/components/Username";
import { FC } from "react";
import styles from "./SidebarUser.module.scss";

interface SidebarUserProps {
  user: UserWithId;
}

export const SidebarUser: FC<SidebarUserProps> = ({ user }) => {
  return (
    <div className={styles.userProfile}>
      <UserImg
        src={user?.profileImg}
        alt="Profile avatar"
        className={styles.profileImage}
      />
      <div>
        <UserFullname fullName={user?.fullName} />
        <Username username={user?.username} />
      </div>
    </div>
  );
};
