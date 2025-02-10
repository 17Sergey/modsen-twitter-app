"use client";

import { authAPI } from "@/pages/entry/api/auth";
import TwitterIcon from "@/shared/assets/twitter.svg";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import InputField from "@/shared/components/InputField";
import LoginWithGoogle from "@/shared/components/LoginWithGoogle";
import { ROUTES } from "@/shared/constants/constants";
import { loginValidation } from "@/shared/utils/loginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
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
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src={TwitterIcon}
            alt={"Twitter icon"}
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>
        <h2 className={styles.heading}>Log in to Twitter</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          <div className={styles.inputGroup}>
            <InputField
              type="text"
              placeholder="Username or email address"
              register={register}
              name={"usernameOrEmail"}
              error={errors.usernameOrEmail?.message}
            />
            <InputField
              type="password"
              placeholder="Password"
              register={register}
              name={"password"}
              error={errors.password?.message}
            />
          </div>

          <PrimaryButton type="submit" className={styles.submitButton}>
            Log In
          </PrimaryButton>

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
    </div>
  );
};
