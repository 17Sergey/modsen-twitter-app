import { SIDEBAR_ITEMS } from "../const";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import styles from "./SidebarItems.module.scss";

export const SidebarItems = () => {
  return (
    <div className={styles.sidebarItems}>
      {SIDEBAR_ITEMS.map(({ label, icon, route }) => (
        <SidebarItem key={label} icon={icon} label={label} route={route} />
      ))}
    </div>
  );
};
