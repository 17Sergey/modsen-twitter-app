import { getMe } from "./getMe";
import { login } from "./login";
import { loginWithGoogle } from "./loginWithGoogle";
import { logout } from "./logout";
import { signup } from "./signup";
import { signUpWithGoogle } from "./signUpWithGoogle";

export const authAPI = {
  loginWithGoogle,
  signUpWithGoogle,
  logout,
  signup,
  login,
  getMe,
};
