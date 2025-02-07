"use client";

import { ROUTES, UNAUTHORIZED_ROUTES } from "@/shared/constants/constants";
import { usePathname, useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect } from "react";
import { useAuth } from "../AuthProvider/useAuth";

export const UnauthorizedRoutesProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isAuthenticated = !!user;
  const isUnauthorizedRoute =
    pathname && UNAUTHORIZED_ROUTES.includes(pathname);

  useEffect(() => {
    if (isAuthenticated && isUnauthorizedRoute) {
      console.log("Redirecting to feed from unauthorized route");
      router.replace(ROUTES.FEED);
    }
  }, [router, isAuthenticated, isUnauthorizedRoute]);

  return <>{children}</>;
};
