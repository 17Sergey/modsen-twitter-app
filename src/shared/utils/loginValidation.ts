import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Username or email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
