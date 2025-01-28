import { getUserFriendlyMessage } from "@/app/api/firebase/errorCodes";
import { auth, googleProvider } from "@/app/api/firebase/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";

export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    const user = auth.currentUser;

    if (!user) throw new Error("User was not found in Google. Try later");

    return user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;

      const message = getUserFriendlyMessage(errorCode);
      throw new Error(message);
    }
  }
};
