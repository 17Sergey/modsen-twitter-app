"use client";

import { PROTECTED_ROUTES } from "@/shared/constants/constants";
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
        <Sidebar />
        {children}
        <div>Aside</div>
      </div>
    );

  return <>{children}</>;
};
