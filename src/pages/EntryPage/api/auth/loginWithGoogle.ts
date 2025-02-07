import { getUserFriendlyMessage } from "@/appFSD/api/firebase/errorCodes";
import { auth, googleProvider } from "@/appFSD/api/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import { generateTokenAndSetCookie } from "@/entities/user/api/generateTokenAndSetCookie";
import { userRepository } from "@/entities/user/api/UserRepository";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    if (!user) throw new Error("User was not found in Google. Try later");

    if (!user.email)
      throw new Error(
        "Google user doesn't have an email. Please add email to google.",
      );

    const existingUser = (await userRepository.getUserByEmail(
      user.email,
    )) as UserWithId;

    if (existingUser) {
      await generateTokenAndSetCookie(existingUser);

      return {
        user: existingUser,
        isAuthenticated: true,
      };
    }

    return {
      user: user,
      isAuthenticated: false,
    };
  } catch (error) {
    if (error instanceof FirebaseError) {
      const message = getUserFriendlyMessage(error.code);
      throw new Error(message);
    }
    if (error instanceof Error) throw new Error(error.message);
  }
};
