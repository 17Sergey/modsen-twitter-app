import { authAPI } from "@/pages/entry/api/auth";
import { ROUTES } from "@/shared/constants/constants";
import { useMutation } from "@tanstack/react-query";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type LoginWithGoogleResponse = {
  user: User | UserWithId;
  isAuthenticated: boolean;
};

export const useGoogleAuth = () => {
  const router = useRouter();
  const [googleUser, setGoogleUser] = useState<User | null>(null);
  const [needToCreateUsername, setNeedToCreateUsername] = useState(false);

  const { mutate: loginWithGoogleMutation, isPending: isLogginInWithGoogle } =
    useMutation({
      mutationFn: authAPI.loginWithGoogle,
      onSuccess: (response: LoginWithGoogleResponse | undefined) => {
        if (response?.isAuthenticated) {
          toast.success("Logged in successfully");
          router.replace(ROUTES.FEED);
        } else {
          setGoogleUser(response?.user as User);
          setNeedToCreateUsername(true);
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  const { mutate: signUpWithGoogleMutation } = useMutation({
    mutationFn: authAPI.signUpWithGoogle,
    onSuccess: (user: UserWithId | undefined) => {
      if (user) {
        toast.success("Logged in successfully");
        router.replace(ROUTES.FEED);
        setNeedToCreateUsername(false);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleLoginWithGoogle = () => {
    loginWithGoogleMutation();
  };

  const handleSignupWithGoogle = (username: string) => {
    signUpWithGoogleMutation({ googleUser, username });
  };

  const handleCloseModal = () => {
    setNeedToCreateUsername(false);
  };

  return {
    needToCreateUsername,
    handleLoginWithGoogle,
    handleSignupWithGoogle,
    handleCloseModal,
    isLogginInWithGoogle,
  };
};
