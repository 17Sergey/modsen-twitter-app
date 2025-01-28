"use client";

import { PROTECTED_ROUTES, ROUTES } from "@/shared/constants/constants";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
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

// export const withAuth = (WrappedComponent: FC) => {
//   // eslint-disable-next-line react/display-name
//   return (props: JSX.IntrinsicAttributes) => {
//     const router = useRouter();
//     const { user } = useAuth();
//     const isAuthenticated = !!user;

//     useEffect(() => {
//       if (!isAuthenticated) {
//         router.replace(ROUTES.ENTRY);
//       }
//     }, [isAuthenticated, router]);

//     if (!isAuthenticated) {
//       return null; // Пока выполняется редирект, ничего не рендерим
//     }

//     return <WrappedComponent {...props} />;
//   };
// };
