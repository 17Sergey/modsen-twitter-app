import Image from "next/image";
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
    <Image src={icon} alt={`${label} icon`} className={styles.icon} />
    <span>{label}</span>
  </Link>
);
