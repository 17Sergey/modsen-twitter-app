import { userRepository } from "./UserRepository";

export const searchUsers = async (query: string) => {
  const users = await userRepository.searchUsers(query);
  return users;
};
