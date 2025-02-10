import { UserType } from "@/app/providers/AuthProvider/context";
import { API_ROUTES } from "@/shared/constants/constants";

export const getMe = async (): Promise<UserType> => {
  const response = await fetch(API_ROUTES.GET_ME, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) return null;

  const data = await response.json();

  return data.user as UserWithId;
};
