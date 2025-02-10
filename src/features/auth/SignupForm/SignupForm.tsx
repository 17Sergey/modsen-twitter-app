import { authAPI } from "@/pages/EntryPage/api/auth";
import InputField from "@/shared/components/InputField";
import { ROUTES } from "@/shared/constants/constants";
import { signupValidation } from "@/shared/utils/signupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { inputFields, ISignupInput, MIN_USER_AGE } from "./constants";
import styles from "./SignupForm.module.scss";
import { renderDayOptions } from "./utils/renderDayOptions";
import { renderMonthOptions } from "./utils/renderMonthOptions";
import { renderYearOptions } from "./utils/renderYearOptions";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupInput>({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: {
        month: "January",
        day: 1,
        year: new Date().getFullYear() - MIN_USER_AGE,
      },
    },
    resolver: yupResolver(signupValidation),
  });

  const router = useRouter();

  const { mutate: signupMutation } = useMutation({
    mutationFn: authAPI.signup,
    onSuccess: (user: UserWithId | undefined) => {
      console.log(user);

      toast.success("Signed up successfully!");
      router.replace(ROUTES.FEED);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<ISignupInput> = (data) => {
    signupMutation(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h2 className={styles.heading}>Create an account</h2>

      {inputFields.map((field) => (
        <InputField
          key={field.name}
          type={field.type}
          placeholder={field.placeholder}
          register={register}
          name={field.name}
          error={errors[field.name]?.message}
        />
      ))}

      <div className={styles.inputGroup}>
        <label>Date of Birth</label>
        <div className={styles.dateContainer}>
          <select {...register("birthDate.month")}>
            {renderMonthOptions()}
          </select>
          <select {...register("birthDate.day")}>{renderDayOptions()}</select>
          <select {...register("birthDate.year")}>{renderYearOptions()}</select>
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Next
      </button>
      <div className={styles.link}>
        <Link href={ROUTES.LOGIN}>Go to logins</Link>
      </div>
    </form>
  );
};
