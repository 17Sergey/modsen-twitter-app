// utils/validation.ts
import { MIN_USER_AGE } from "@/features/auth/SignupForm/constants";
import * as Yup from "yup";

const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,20}$/;

export const signupValidation = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  username: Yup.string()
    .required("Phone number is required")
    .matches(
      USERNAME_REGEX,
      "Username cannot contain spaces and other specific symbols",
    ),
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
      .test("age", "You must be at least 12 years old", function (value) {
        const { month, day } = this.parent;
        const birthDate = new Date(`${month} ${day}, ${value}`);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        return (
          age >= MIN_USER_AGE ||
          (age === MIN_USER_AGE - 1 && new Date() < birthDate)
        );
      }),
  }),
});
