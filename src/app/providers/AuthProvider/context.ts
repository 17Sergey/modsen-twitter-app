import { createContext } from "react";

export type ContextType =
  | {
      user: UserType;
      setCurrentUser: (user: UserType) => void;
    }
  | undefined;

export type UserType = UserWithId | null;

export const AuthContext = createContext<ContextType>(undefined);
