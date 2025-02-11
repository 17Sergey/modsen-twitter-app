import { authAPI } from "@/pages/entry/api/auth";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import { ROUTES } from "@/shared/constants/constants";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC } from "react";
import toast from "react-hot-toast";
import styles from "./LogoutButton.module.scss";

export const LogoutButton: FC = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      toast.success("Logged out successfully");
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
    <PrimaryButton className={styles.logoutButton} onClick={handleLogout}>
      {isPending ? "Pending..." : "Log out"}
    </PrimaryButton>
  );
};
