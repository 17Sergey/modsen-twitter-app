"use client";

import { authAPI } from "@/pages/entry/api/auth";
import Loader from "@/shared/components/Loader";
import { QUERY_KEYS, ROUTES } from "@/shared/constants";
import { pathHelpers } from "@/shared/utils/pathHelpers";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./AuthProvider.module.scss";
import { AuthContext, UserType } from "./context";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);
  const [didLogout, setDidLogout] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { data: fetchedUser, isLoading } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.USER_AUTH],
    queryFn: authAPI.getMe,
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !user,
  });

  const setCurrentUser = (newUser: UserType) => {
    setUser(newUser);
  };

  const setDidLogoutHandler = (newDidLogout: boolean) => {
    setDidLogout(newDidLogout);
  };

  const passedUser = user || fetchedUser || null;

  const redirectUnauthorizedUserToEntry =
    !isLoading && !passedUser && pathHelpers.isProtectedRoute(pathname || "");

  const redirectAuthorizedUserToFeed =
    !isLoading &&
    fetchedUser &&
    !didLogout &&
    pathHelpers.isUnauthorizedRoute(pathname || "");

  useEffect(() => {
    if (redirectUnauthorizedUserToEntry) {
      router.push(ROUTES.ENTRY);
    }
    if (redirectAuthorizedUserToFeed) {
      router.push(ROUTES.FEED);
    }
  }, [isLoading, passedUser, pathname, router]);

  if (redirectAuthorizedUserToFeed || redirectUnauthorizedUserToEntry)
    return null;

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader variant="lg" />
      </div>
    );

  return (
    <AuthContext.Provider
      value={{
        user: passedUser,
        setCurrentUser,
        setDidLogout: setDidLogoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
