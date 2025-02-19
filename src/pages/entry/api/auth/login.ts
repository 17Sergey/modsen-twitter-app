import { generateTokenAndSetCookie } from "@/entities/user/api/generateTokenAndSetCookie";
import { userRepository } from "@/entities/user/api/UserRepository";

interface LoginParams {
  usernameOrEmail: string;
  password: string;
}

export const login = async ({ usernameOrEmail, password }: LoginParams) => {
  const isEmail = usernameOrEmail.includes("@");

  let existingUser;

  if (isEmail) {
    existingUser = (await userRepository.getUserByEmail(
      usernameOrEmail,
    )) as UserWithId;
  } else {
    existingUser = (await userRepository.getUserByUsername(
      usernameOrEmail,
    )) as UserWithId;
  }

  loginChecks(existingUser, password);

  if (existingUser) {
    await generateTokenAndSetCookie(existingUser);
  }

  return existingUser;
};

const loginChecks = (user: UserWithId | undefined, password: string) => {
  if (!user) throw new Error("User with this credentials was not found");

  if (user.isSocialAuth)
    throw new Error(
      "Your account is associated with Google auth. Try using Google",
    );

  if (user.password !== password) throw new Error("Invalid password");
};
