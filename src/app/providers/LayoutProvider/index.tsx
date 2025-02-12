"use client";

import {
  BREAKPOINT_FOR_BURGER_MENU,
  PROTECTED_ROUTES,
} from "@/shared/constants";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import Aside from "@/widgets/Aside/components/Aside";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import styles from "./LayoutProvider.module.scss";
import BurgerMenu from "@/widgets/BurgerMenu";
import Sidebar from "@/widgets/Sidebar";

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const isProtectedRoute = pathname && PROTECTED_ROUTES.includes(pathname);

  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < BREAKPOINT_FOR_BURGER_MENU;

  if (isProtectedRoute)
    return (
      <div className={styles.wrapper}>
        {isMobile ? (
          <nav className={styles.menu}>
            <BurgerMenu />
          </nav>
        ) : (
          <nav className={styles.sidebar}>
            <Sidebar />
          </nav>
        )}
        <main className={styles.main}>{children}</main>
        <aside className={styles.aside}>
          <Aside />
        </aside>
      </div>
    );

  return <>{children}</>;
};
