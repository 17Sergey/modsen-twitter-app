"use client";

import { BREAKPOINT_FOR_BURGER_MENU } from "@/shared/constants";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { pathHelpers } from "@/shared/utils/pathHelpers";
import Aside from "@/widgets/Aside/components/Aside";
import BurgerMenu from "@/widgets/BurgerMenu";
import Sidebar from "@/widgets/Sidebar";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import styles from "./LayoutProvider.module.scss";

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const isProtectedRoute = pathname && pathHelpers.isProtectedRoute(pathname);

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
