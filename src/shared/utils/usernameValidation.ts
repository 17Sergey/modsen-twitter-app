import * as Yup from "yup";

export const usernameValidation = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(2, "Must be at least 2 characters")
    .max(50, "Cannot exceed 50 characters"),
});
