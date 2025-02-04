"use client";

import { PROTECTED_ROUTES } from "@/shared/constants/constants";
import Aside from "@/widgets/aside/components/Aside";
import Sidebar from "@/widgets/Sidebar";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import styles from "./LayoutProvider.module.scss";

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  const isProtectedRoute = pathname && PROTECTED_ROUTES.includes(pathname);

  if (isProtectedRoute)
    return (
      <div className={styles.wrapper}>
        <nav>
          <Sidebar />
        </nav>
        <main className={styles.main}>{children}</main>
        <aside className={styles.aside}>
          <Aside />
        </aside>
      </div>
    );

  return <>{children}</>;
};
