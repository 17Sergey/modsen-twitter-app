import Modal from "@/shared/components/Modal";
import { usernameValidation } from "@/shared/utils/usernameValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../InputField";
import ActionButton from "../../buttons/ActionButton";
import styles from "./AddUsernameModal.module.scss";

interface AddUsernameModalProps {
  onClose: VoidFunction;
  onAdd: (username: string) => void;
}

interface FormData {
  username: string;
}

export const AddUsernameModal: FC<AddUsernameModalProps> = ({
  onClose,
  onAdd,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
    },
    resolver: yupResolver(usernameValidation),
  });

  const handleAddUsername = (data: FormData) => {
    onAdd(data.username);
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit(handleAddUsername)}>
        <p className={styles.heading}>Almost there! Provide a username</p>
        <InputField
          type="text"
          placeholder="Username"
          register={register}
          name="username"
          error={errors.username?.message}
        />
        <div className={styles.buttonContainer}>
          <ActionButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing up..." : "Sign up"}
          </ActionButton>
        </div>
      </form>
    </Modal>
  );
};
