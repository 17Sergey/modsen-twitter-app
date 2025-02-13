import { createContext } from "react";

export type UserType = UserWithId | null;

export type ContextType =
  | {
      user: UserType;
      setCurrentUser: (user: UserType) => void;
      setDidLogout: (newDidLogout: boolean) => void;
    }
  | undefined;

export const AuthContext = createContext<ContextType>(undefined);
