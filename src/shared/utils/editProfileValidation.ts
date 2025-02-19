import * as Yup from "yup";

const PHONE_REGEX =
  /^$|^\+?[0-9]{1,3}[-\s]?[0-9]{1,3}[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,4}$/;

export const editProfileValidation = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),

  phoneNumber: Yup.string()
    .optional()
    .matches(
      PHONE_REGEX,
      "Phone number must contain only digits and symbols +, (, ), -",
    ),

  bio: Yup.string().optional().max(200, "Bio cannot exceed 200 characters"),

  link: Yup.string()
    .optional()
    .url("Link must be a valid URL")
    .max(100, "Link cannot exceed 100 characters"),
});
