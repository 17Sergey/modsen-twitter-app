import { auth } from "@/app/api/firebase";
import { API_ROUTES } from "@/shared/constants";
import { signOut } from "firebase/auth";

export const logout = async () => {
  await fetch(API_ROUTES.LOGOUT, {
    method: "POST",
    credentials: "include",
  });
};
