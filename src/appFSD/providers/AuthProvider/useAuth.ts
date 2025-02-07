import { useContext } from "react";
import { AuthContext } from "./context";

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("Component must be wrapped in AuthProvider");

  const { user, setCurrentUser } = context;

  return { user, setCurrentUser };
}
