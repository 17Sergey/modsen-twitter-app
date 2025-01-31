import Image from "next/image";
import Link from "next/link";
import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  icon: string;
  label: string;
  route: string;
}

export const SidebarItem = ({ icon, label, route }: SidebarItemProps) => (
  <Link href={route} className={styles.sidebarItem}>
    <Image src={icon} alt={`${label} icon`} className={styles.icon} />
    <span>{label}</span>
  </Link>
);
