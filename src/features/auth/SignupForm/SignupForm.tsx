"use client";

import { ROUTES } from "@/shared/constants/constants";
import { signupValidation } from "@/shared/utils/signupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./SignupForm.module.scss";

interface IFormInput {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: { month: string; day: number; year: number };
}

export const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: { month: "", day: 1, year: 1900 },
    },
    resolver: yupResolver(signupValidation),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h2 className={styles.heading}>Create an account</h2>

      <div className={styles.inputGroup}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <div className={styles.inputContainer}>
              <input {...field} type="text" placeholder="Name" />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className={styles.inputGroup}>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: "Phone number is required" }}
          render={({ field }) => (
            <div className={styles.inputContainer}>
              <input {...field} type="tel" placeholder="Phone number" />
              {errors.phoneNumber && (
                <p className={styles.error}>{errors.phoneNumber.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className={styles.inputGroup}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <div className={styles.inputContainer}>
              <input {...field} type="email" placeholder="Email" />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className={styles.inputGroup}>
        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <div className={styles.inputContainer}>
              <input {...field} type="password" placeholder="Password" />
              {errors.password && (
                <p className={styles.error}>{errors.password.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className={styles.inputGroup}>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: "Confirm password is required" }}
          render={({ field }) => (
            <div className={styles.inputContainer}>
              <input
                {...field}
                type="password"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className={styles.error}>{errors.confirmPassword.message}</p>
              )}
            </div>
          )}
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
              <select {...field} style={{ flex: 1, marginRight: "5px" }}>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            )}
          />
          <Controller
            name="birthDate.year"
            control={control}
            render={({ field }) => (
              <select {...field} style={{ flex: 1 }}>
                {Array.from(
                  { length: new Date().getFullYear() - 1900 + 1 },
                  (_, i) => 1900 + i,
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Next
      </button>
      <div className={styles.link}>
        <Link href={ROUTES.LOGIN}>Go to logins</Link>
      </div>
    </form>
  );
};
