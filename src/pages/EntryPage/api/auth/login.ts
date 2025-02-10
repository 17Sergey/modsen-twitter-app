import { userRepository } from "@/entities/user/api/UserRepository";

interface LoginParams {
  usernameOrEmail: string;
  password: string;
}

export const login = async ({ usernameOrEmail, password }: LoginParams) => {
  const isEmail = usernameOrEmail.includes("@");

  let existingUser: UserModel | undefined = undefined;

  if (isEmail) {
    existingUser = await userRepository.getUserByEmail(usernameOrEmail);
  } else {
    existingUser = await userRepository.getUserByUsername(usernameOrEmail);
  }

  loginChecks(existingUser, password);

  return existingUser;
};

const loginChecks = (user: UserModel | undefined, password: string) => {
  if (!user) throw new Error("User with this credentials was not found");

  if (user.isSocialAuth)
    throw new Error(
      "Your account is associated with Google auth. Try using Google",
    );

  // TODO: add hashing
  if (user.password !== password) throw new Error("Invalid password");
};
