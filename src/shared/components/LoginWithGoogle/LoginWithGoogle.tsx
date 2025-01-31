"use client";

import AddUsernameModal from "@/shared/components/LoginWithGoogle/AddUsernameModal";
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
      <button className={styles.button} onClick={handleLoginWithGoogle}>
        {isLogginInWithGoogle ? "Logging you in..." : "Log in with Google"}
      </button>
    </div>
  );
};
