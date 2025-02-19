import IconMatcher from "@/shared/components/icons/IconMatcher";
import Link from "next/link";
import { FC } from "react";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  icon: string;
  label: string;
  route: string;
}

export const SidebarItem: FC<SidebarItemProps> = ({ icon, label, route }) => (
  <Link href={route} className={styles.sidebarItem}>
    <div className={styles.iconContainer}>
      <IconMatcher name={icon} className={styles.icon} />
    </div>
    <span>{label}</span>
  </Link>
);
