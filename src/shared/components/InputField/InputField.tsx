import { ComponentProps, FC } from "react";
import styles from "./InputField.module.scss";

interface InputFieldProps extends ComponentProps<"input"> {
  type: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  name: string;
  error: string | undefined;
}

export const InputField: FC<InputFieldProps> = ({
  type,
  placeholder,
  register,
  name,
  error,
  ...props
}) => {
  return (
    <div className={styles.inputGroup}>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
