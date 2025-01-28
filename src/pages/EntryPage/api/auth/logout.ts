import { auth } from "@/app/api/firebase/firebase";
import { signOut } from "firebase/auth";

export const logout = async () => await signOut(auth);
