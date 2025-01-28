"use client";

import { auth } from "@/app/api/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, UserType } from "./context";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

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
