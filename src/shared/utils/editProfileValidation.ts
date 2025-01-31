import * as Yup from "yup";

export const editProfileValidation = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),

  phoneNumber: Yup.string()
    .optional()
    .matches(
      /^\+?[0-9\s()-]+$/,
      "Phone number must contain only digits and symbols +, (, ), -",
    ),

  birthDate: Yup.date()
    .optional()
    .max(new Date(), "Birth date cannot be in the future"),

  bio: Yup.string().optional().max(200, "Bio cannot exceed 200 characters"),

  link: Yup.string()
    .url("Link must be a valid URL")
    .optional()
    .max(100, "Link cannot exceed 100 characters"),
});
