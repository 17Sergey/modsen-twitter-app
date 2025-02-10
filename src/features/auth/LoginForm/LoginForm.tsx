"use client";

import { authAPI } from "@/pages/EntryPage/api/auth";
import LoginWithGoogle from "@/shared/components/LoginWithGoogle";
import { ROUTES } from "@/shared/constants/constants";
import { loginValidation } from "@/shared/utils/loginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styles from "./LoginForm.module.scss";

interface ILoginInput {
  usernameOrEmail: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>({
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
    resolver: yupResolver(loginValidation),
  });

  const router = useRouter();

  const { mutate: loginMutation } = useMutation({
    mutationFn: authAPI.login,
    onSuccess: (user: UserModel | undefined) => {
      if (user) {
        toast.success("Logged in successfully");
        router.replace(ROUTES.FEED);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    const { usernameOrEmail, password } = data;
    loginMutation({ usernameOrEmail, password });
  };

  const handleGoogleLogin = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <h2 className={styles.heading}>Log in to Twitter</h2>

        <div className={styles.inputGroup}>
          <label>Username or email address</label>
          <input
            {...register("usernameOrEmail")}
            type="text"
            placeholder="Username or email address"
          />
          {errors.usernameOrEmail && (
            <span>{errors.usernameOrEmail.message}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit" className={styles.submitButton}>
          Log In
        </button>

        <div className={styles.google} onClick={handleGoogleLogin}>
          <LoginWithGoogle />
        </div>

        <div className={styles.link}>
          <p>
            <Link href={ROUTES.SIGNUP}>Sign up to Twitter</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
