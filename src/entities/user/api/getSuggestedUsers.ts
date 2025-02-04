import { userRepository } from "./UserRepository";

export const getSuggestedUsers = async (username: string) => {
  if (!username) {
    alert("empty:" + username);
  }
  const user = (await userRepository.getUserByUsername(username)) as UserWithId;

  if (!user)
    throw new Error(
      "Failed to fetch suggested users: current user doesn't exist",
    );

  const users = (await userRepository.getAll()) as UserWithId[];

  const filteredUsers = users.filter(
    ({ id, followers }) => id !== user.id && !followers?.includes(user.id),
  );

  const suggestedUsers =
    filteredUsers.length > 8 ? filteredUsers.slice(0, 5) : filteredUsers;

  return suggestedUsers;
};
