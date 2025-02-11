import { userAPI } from "@/entities/user/api/userAPI";
import ActionButton from "@/shared/components/buttons/ActionButton";
import InputField from "@/shared/components/InputField";
import Modal from "@/shared/components/Modal";
import { QUERY_KEYS } from "@/shared/constants/constants";
import { editProfileValidation } from "@/shared/utils/editProfileValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styles from "./EditProfileModal.module.scss";

export interface EditFormData {
  fullName: string;
  phoneNumber?: string;
  bio?: string;
  link?: string;
}

interface EditProfileModalProps {
  onClose: VoidFunction;
  user: UserModel;
}

export const EditProfileModal: FC<EditProfileModalProps> = ({
  user,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditFormData>({
    defaultValues: {
      fullName: user.fullName,
      phoneNumber: user.phoneNumber || "",
      bio: user.bio,
      link: user.link,
    },
    resolver: yupResolver(editProfileValidation),
  });

  const queryClient = useQueryClient();

  const { mutate: editMutation, isPending } = useMutation({
    mutationFn: userAPI.editProfile,
    onSuccess: (message: string | undefined) => {
      toast.success(message ? message : "Profile edited successfully!");
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.USER_PROFILE, user.username],
      });

      onClose();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleEditProfile = (formData: EditFormData) => {
    editMutation({ formData, username: user.username });
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit(handleEditProfile)}>
        <h2 className={styles.heading}>Edit Profile</h2>

        <div className={styles.fields}>
          <InputField
            type="text"
            placeholder="Full Name"
            register={register}
            name="fullName"
            error={errors.fullName?.message}
          />
          <InputField
            type="text"
            placeholder="Phone Number"
            register={register}
            name="phoneNumber"
            error={errors.phoneNumber?.message}
          />
          <InputField
            type="text"
            placeholder="Bio"
            register={register}
            name="bio"
            error={errors.bio?.message}
          />
          <InputField
            type="text"
            placeholder="Link"
            register={register}
            name="link"
            error={errors.link?.message}
          />
        </div>

        <div className={styles.save}>
          <ActionButton
            type="submit"
            disabled={isSubmitting || isPending}
            className={styles.saveButton}
          >
            <span>{isPending ? "Saving..." : "Save Changes"}</span>
          </ActionButton>
        </div>
      </form>
    </Modal>
  );
};
