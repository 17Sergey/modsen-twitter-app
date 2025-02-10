import { authAPI } from "@/pages/entry/api/auth";
import TwitterIcon from "@/shared/assets/twitter.svg";
import LinkButton from "@/shared/components/buttons/LinkButton";
import PrimaryButton from "@/shared/components/buttons/PrimaryButton";
import InputField from "@/shared/components/InputField";
import Select from "@/shared/components/Select";
import { ROUTES } from "@/shared/constants/constants";
import { signupValidation } from "@/shared/utils/signupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
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
      <div className={styles.logo}>
        <Image
          src={TwitterIcon}
          alt={"Twitter icon"}
          width={24}
          height={24}
          className={styles.icon}
        />
      </div>
      <h2 className={styles.heading}>Create an account</h2>

      <ul>
        {inputFields.map((field) => (
          <li className={styles.field} key={field.name}>
            <InputField
              type={field.type}
              placeholder={field.placeholder}
              register={register}
              name={field.name}
              error={errors[field.name]?.message}
            />
          </li>
        ))}
      </ul>

      <div className={styles.inputGroup}>
        <h3 className={`${styles.heading} ${styles.birthDateHeading}`}>
          Date of Birth
        </h3>
        <p className={`${styles.birthDateText}`}>
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit.
          Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim
          nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra
          dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </p>
        <div className={styles.dateContainer}>
          <Select
            {...register("birthDate.day")}
            error={errors.birthDate?.day?.message}
          >
            {renderDayOptions()}
          </Select>
          <Select
            {...register("birthDate.month")}
            error={errors.birthDate?.month?.message}
          >
            {renderMonthOptions()}
          </Select>
          <Select
            {...register("birthDate.year")}
            error={errors.birthDate?.year?.message}
          >
            {renderYearOptions()}
          </Select>
        </div>
      </div>

      <div className={styles.buttons}>
        <PrimaryButton type="submit">Next</PrimaryButton>
        <LinkButton href={ROUTES.LOGIN}>Go to Log In</LinkButton>
      </div>
    </form>
  );
};
