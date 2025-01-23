// utils/validation.ts
import * as Yup from "yup";

export const signupValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be digits"),
  email: Yup.string().required("Email is required").email("Email is not valid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
  birthDate: Yup.object().shape({
    month: Yup.string().required("Month is required"),
    day: Yup.number()
      .required("Day is required")
      .min(1, "Day must be at least 1")
      .max(31, "Day must be at most 31"),
    year: Yup.number()
      .required("Year is required")
      .min(1900, "Year must be at least 1900")
      .max(new Date().getFullYear(), "Year cannot be in the future"),
  }),
});
