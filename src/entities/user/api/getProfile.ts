import { userRepository } from "./UserRepository";

export const getProfile = async (username: string) => {
  const user = await userRepository.getUserByUsername(username);
  if (!user) throw new Error("User was not found");

  return user;
};
