"use client";

import { auth } from "@/app/api/firebase/firebase";
import { ROUTES } from "@/shared/constants/constants";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, UserType } from "./context";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);

  console.log("Auth provider");

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/auth/checkToken", {
        method: "GET",
        credentials: "include", // Включить куки в запрос
      });

      if (response.ok) {
        const data = await response.json();
        // setUser(data.user);
        console.log(`Resp data: ${data.user}`);
        setUser(auth.currentUser);
        router.replace(ROUTES.FEED);
      } else {
        setUser(null);
      }
    };

    fetchUser();

    // Чистка подписки
    return () => {
      // Здесь можно добавить логику очищения, если нужно
    };
  }, [router]);

  const setCurrentUser = (user: UserType) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
