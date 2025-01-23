"use client";

import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./SignUpForm.module.scss";

interface IFormInput {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: { month: string; day: string; year: string };
}

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: { month: "", day: "", year: "" },
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h2 className={styles.heading}>Create an account</h2>

      <div className={styles.inputGroup}>
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Phone number</label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => <input {...field} type="tel" />}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} type="email" />}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input {...field} type="password" />}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Confirm password</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => <input {...field} type="password" />}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Date of birth</label>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Controller
            name="birthDate.month"
            control={control}
            render={({ field }) => (
              <select {...field} style={{ flex: 1, marginRight: "5px" }}>
                <option value="">Month</option>
                {[
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
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            )}
          />
          <Controller
            name="birthDate.day"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                placeholder="Day"
                min="1"
                max="31"
                style={{ flex: 1, marginRight: "5px" }}
              />
            )}
          />
          <Controller
            name="birthDate.year"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                placeholder="Year"
                min="1900"
                max={new Date().getFullYear()}
                style={{ flex: 1 }}
              />
            )}
          />
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Next
      </button>
      <div className={styles.link}>
        <Link href={"/login"}>Go to logins</Link>
      </div>
    </form>
  );
};

export default SignUpForm;
