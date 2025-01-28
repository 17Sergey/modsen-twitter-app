// app/api/auth/loginWithGoogle.js
import { getUserFriendlyMessage } from "@/app/api/firebase/errorCodes";
import { auth, googleProvider } from "@/app/api/firebase/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    if (!user) throw new Error("User was not found in Google. Try later");

    const token = await user.getIdToken();

    await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
      credentials: "include",
    });

    return user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const message = getUserFriendlyMessage(errorCode);
      throw new Error(message);
    }
  }
};
