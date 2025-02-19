"use client";

import GoogleIcon from "@/shared/assets/google.webp";
import AddUsernameModal from "@/shared/components/LoginWithGoogle/AddUsernameModal";
import { DATA_CY } from "@/shared/constants";
import Image from "next/image";
import Button from "../buttons/Button";
import styles from "./LoginWithGoogle.module.scss";
import { useGoogleAuth } from "./hooks/useGoogleAuth";

export const LoginWithGoogle = () => {
  const {
    needToCreateUsername,
    handleLoginWithGoogle,
    handleSignupWithGoogle,
    handleCloseModal,
    isLogginInWithGoogle,
  } = useGoogleAuth();

  return (
    <div>
      <div>
        {needToCreateUsername && (
          <AddUsernameModal
            onAdd={handleSignupWithGoogle}
            onClose={handleCloseModal}
          />
        )}
      </div>
      <Button
        className={styles.button}
        onClick={handleLoginWithGoogle}
        data-cy={DATA_CY.LOGIN_WITH_GOOGLE}
      >
        <div className={styles.buttonContent}>
          <Image src={GoogleIcon} width={24} height={24} alt="Google logo" />
          {isLogginInWithGoogle ? "Logging you in..." : "Log in with Google"}
        </div>
      </Button>
    </div>
  );
};
