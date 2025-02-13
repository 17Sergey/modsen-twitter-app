// "use client";

// import { getMe } from "@/entities/user/api/getMe";
// import { ROUTES, UNAUTHORIZED_ROUTES } from "@/shared/constants/constants";
// import { usePathname, useRouter } from "next/navigation";
// import { FC, PropsWithChildren, useEffect, useState } from "react";
// import { AuthContext, UserType } from "./context";

// const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [user, setUser] = useState<UserType>(null);

//   console.log("Auth provider");

//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = await getMe();

//       if (!user) return;

//       setUser(user);
//       if (UNAUTHORIZED_ROUTES.includes(pathname || "")) {
//         debugger;
//         router.replace(ROUTES.FEED);
//       }
//     };

//     fetchUser();
//   }, [router, pathname]);

//   const setCurrentUser = (user: UserType) => {
//     setUser(user);
//   };

//   return (
//     <AuthContext.Provider value={{ user, setCurrentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

"use client";

import { authAPI } from "@/pages/entry/api/auth";
import Loader from "@/shared/components/Loader";
import { QUERY_KEYS } from "@/shared/constants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import styles from "./AuthProvider.module.scss";
import { AuthContext, UserType } from "./context";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  // const pathname = usePathname();

  const { data: fetchedUser, isLoading } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.USER_AUTH],
    queryFn: authAPI.getMe,
    retry: false,
  });

  const setCurrentUser = (newUser: UserType) => {
    console.log(newUser);
  };

  const user = fetchedUser ? fetchedUser : null;

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader variant="lg" />
      </div>
    );

  return (
    <AuthContext.Provider value={{ user, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
