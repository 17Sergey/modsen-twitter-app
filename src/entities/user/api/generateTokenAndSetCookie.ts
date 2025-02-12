import { API_ROUTES } from "@/shared/constants";

export const generateTokenAndSetCookie = async (user: UserModel) => {
  fetch(API_ROUTES.SET_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payload: user.email }),
    credentials: "include",
  });
};
