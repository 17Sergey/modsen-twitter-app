"use client";

import styles from "./AuthControls.module.scss";

import { UserType } from "@/app/providers/AuthProvider/context";
import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { ROUTES } from "@/shared/constants/constants";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authAPI } from "../../../api/auth";

export const AuthControls = () => {
  const { setCurrentUser } = useAuth();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: authAPI.loginWithGoogle,
    onSuccess: (user: UserType | undefined) => {
      if (user) {
        toast.success("Logged in successfully");
        setCurrentUser(user);
        router.push(ROUTES.FEED);
      }
    },
    onError: (error) => {
      console.log(error);

      toast.error(error.message);
      setCurrentUser(null);
    },
  });

  const handleLoginWithGoogle = () => {
    mutate();
  };

  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={handleLoginWithGoogle}>
        {isPending ? "Logging you in..." : "Sign up with Google"}
      </button>
      <Link href={ROUTES.SIGNUP} className={styles.button}>
        Sign up with email
      </Link>
    </div>
  );
};
