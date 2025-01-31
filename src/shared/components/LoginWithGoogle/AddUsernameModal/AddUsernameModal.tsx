import Modal from "@/shared/components/Modal";
import { FC } from "react";
import { useForm } from "react-hook-form";

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
    formState: { isSubmitting },
  } = useForm<FormData>();

  const handleAddUsername = (data: FormData) => {
    onAdd(data.username);
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit(handleAddUsername)}>
        <p>Almost there! Provide a username</p>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <button type="submit" disabled={isSubmitting}>
          Sign up
        </button>
        {isSubmitting && <div>Creating user...</div>}
      </form>
    </Modal>
  );
};
