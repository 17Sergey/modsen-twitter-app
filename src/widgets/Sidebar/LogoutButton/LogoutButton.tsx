import { useAuth } from "@/app/providers/AuthProvider/useAuth";
import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import { authAPI } from "@/pages/entry/api/auth";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import { DATA_CY, ROUTES, THEME_NAMES } from "@/shared/constants";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC } from "react";
import toast from "react-hot-toast";
import styles from "./LogoutButton.module.scss";

export const LogoutButton: FC = () => {
  const { themeName } = useTheme();

  const router = useRouter();

  const { setCurrentUser, setDidLogout } = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      toast.success("Logged out successfully");

      setCurrentUser(null);
      setDidLogout(true);

      router.push(ROUTES.ENTRY);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleLogout = () => {
    mutate();
  };

  return (
    <div>
      <PrimaryButton
        onClick={handleLogout}
        className={`${styles.logoutButton} ${themeName === THEME_NAMES.DARK && styles.dark}`}
        data-cy={DATA_CY.LOGOUT_BTN}
      >
        {isPending ? "Pending..." : "Log out"}
      </PrimaryButton>
    </div>
  );
};
