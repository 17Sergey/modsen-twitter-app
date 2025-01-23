"use client";

import { loginValidation } from "@/shared/utils/loginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styles from "./LoginForm.module.scss";

interface ILoginInput {
  phoneNumberOrEmail: string;
  password: string;
}

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<ILoginInput>({
    defaultValues: {
      phoneNumberOrEmail: "",
      password: "",
    },
    resolver: yupResolver(loginValidation),
  });

  const onSubmit: SubmitHandler<ILoginInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h2 className={styles.heading}>Log in to Twitter</h2>

      <div className={styles.inputGroup}>
        <label>Phone number, email address</label>
        <Controller
          name="phoneNumberOrEmail"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Phone number, email address"
            />
          )}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input {...field} type="password" placeholder="Password" />
          )}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Log In
      </button>

      <div className={styles.link}>
        <p>
          <Link href={"/signup"}>Sign up to Twitter</Link>
        </p>
      </div>
    </form>
  );
};
