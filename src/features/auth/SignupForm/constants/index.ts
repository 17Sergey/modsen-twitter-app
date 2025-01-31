export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MIN_USER_AGE = 12;

export interface ISignupInput {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: { month: string; day: number; year: number };
}

export interface InputField {
  type: string;
  placeholder: string;
  name: keyof ISignupInput;
}

export const inputFields: Array<InputField> = [
  { type: "text", placeholder: "Name", name: "fullName" },
  { type: "text", placeholder: "Username", name: "username" },
  { type: "email", placeholder: "Email", name: "email" },
  { type: "password", placeholder: "Password", name: "password" },
  {
    type: "password",
    placeholder: "Confirm password",
    name: "confirmPassword",
  },
];
