import { userAPI } from "@/entities/user/api/userAPI";
import InputField from "@/shared/components/InputField";
import Modal from "@/shared/components/Modal";
import { editProfileValidation } from "@/shared/utils/editProfileValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styles from "./EditProfileModal.module.scss";

export interface EditFormData {
  fullName: string;
  phoneNumber?: string;
  birthDate?: Date;
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
      phoneNumber: user.phoneNumber,
      birthDate: user.birthDate,
      bio: user.bio,
      link: user.link,
    },
    resolver: yupResolver(editProfileValidation),
  });

  const { mutate: editMutation } = useMutation({
    mutationFn: userAPI.editProfile,
    onSuccess: (message: string | undefined) => {
      toast.success(message ? message : "Signed up successfully!");
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
        <h2>Edit Profile</h2>

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
          type="date"
          placeholder="Birth Date"
          register={register}
          name="birthDate"
          error={errors.birthDate?.message}
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

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.saveButton}
        >
          <span>{isSubmitting ? "Saving..." : "Save Changes"}</span>
        </button>
      </form>
    </Modal>
  );
};
