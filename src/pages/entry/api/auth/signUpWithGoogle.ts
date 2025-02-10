import { generateTokenAndSetCookie } from "@/entities/user/api/generateTokenAndSetCookie";
import { userRepository } from "@/entities/user/api/UserRepository";
import { User } from "firebase/auth";

type SignUpWithGoogleParams = {
  googleUser: User | null;
  username: string;
};

export const signUpWithGoogle = async ({
  googleUser,
  username,
}: SignUpWithGoogleParams) => {
  if (!googleUser) throw new Error("No google user was found. Try later");

  if (!googleUser.email || !googleUser.displayName) {
    throw new Error(
      "User must have an email and name to log in into application",
    );
  }

  const existingUsername = await userRepository.getUserByUsername(username);
  if (existingUsername)
    throw new Error("User with such username already exists");

  const existingEmail = await userRepository.getUserByEmail(googleUser.email);
  if (existingEmail) throw new Error("User with such email already exists");

  const newUser: UserModel = {
    username: username,
    fullName: googleUser.displayName,
    email: googleUser.email,
    createdAt: Date.now(),
    isSocialAuth: true,
    password: null,
  };

  const createdUserId = await userRepository.create(newUser);

  await generateTokenAndSetCookie(newUser);

  return { ...newUser, id: createdUserId } as UserWithId;
};
