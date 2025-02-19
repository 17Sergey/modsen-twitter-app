import { DATA_CY } from "@/shared/constants";

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
  testId?: string;
}

export const inputFields: Array<InputField> = [
  {
    type: "text",
    placeholder: "Name",
    name: "fullName",
    testId: DATA_CY.SIGNUP.NAME,
  },
  {
    type: "text",
    placeholder: "Username",
    name: "username",
    testId: DATA_CY.SIGNUP.USERNAME,
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
    testId: DATA_CY.SIGNUP.EMAIL,
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    testId: DATA_CY.SIGNUP.PASSWORD,
  },
  {
    type: "password",
    placeholder: "Confirm password",
    name: "confirmPassword",
    testId: DATA_CY.SIGNUP.CONFIRM_PASSWORD,
  },
];
