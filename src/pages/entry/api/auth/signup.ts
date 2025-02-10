import { generateTokenAndSetCookie } from "@/entities/user/api/generateTokenAndSetCookie";
import { userRepository } from "@/entities/user/api/UserRepository";
import { ISignupInput } from "@/features/auth/SignupForm/constants";

export const signup = async (formData: ISignupInput) => {
  const { fullName, email, username, password } = formData;

  const existingEmail = await userRepository.getUserByEmail(email);
  if (existingEmail) throw new Error("User with this email already exists");

  const existingUsername = await userRepository.getUserByUsername(username);
  if (existingUsername)
    throw new Error("User with this username already exists");

  const newUser: UserModel = {
    username,
    email,
    fullName,
    password, // TODO: add hashing
    isSocialAuth: false,
    createdAt: Date.now(),
  };

  const createdUserId = await userRepository.create(newUser);

  await generateTokenAndSetCookie(newUser);

  return { ...newUser, id: createdUserId } as UserWithId;
};
