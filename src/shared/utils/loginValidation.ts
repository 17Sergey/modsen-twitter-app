import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  phoneNumberOrEmail: Yup.string()
    .required("Phone number or email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
