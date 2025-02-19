import { EditFormData } from "@/features/profile/EditProfileModal/EditProfileModal";
import { userRepository } from "./UserRepository";

interface EditProfileParams {
  formData: EditFormData;
  username: string;
}

export const editProfile = async ({
  formData,
  username,
}: EditProfileParams) => {
  const existingUser = (await userRepository.getUserByUsername(
    username,
  )) as UserWithId;
  if (!existingUser) throw new Error("User not found");

  await userRepository.update(existingUser.id, {
    ...existingUser,
    ...formData,
    updatedAt: Date.now(),
  });

  return "Profile updated successfully!";
};
