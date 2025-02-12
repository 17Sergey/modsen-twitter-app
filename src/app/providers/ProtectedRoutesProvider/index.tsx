"use client";

import { PROTECTED_ROUTES, ROUTES } from "@/shared/constants";
import { usePathname, useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect } from "react";
import { useAuth } from "../AuthProvider/useAuth";

export const ProtectedRoutesProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isAuthenticated = !!user;
  const isProtectedRoute = pathname && PROTECTED_ROUTES.includes(pathname);

  useEffect(() => {
    if (!isAuthenticated && isProtectedRoute) {
      router.replace(ROUTES.ENTRY);
    }
  }, [router, isAuthenticated, isProtectedRoute]);

  if (!isAuthenticated && isProtectedRoute) return null;

  return <>{children}</>;
};
