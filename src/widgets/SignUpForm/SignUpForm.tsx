import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: { month: string; day: string; year: string };
}

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: { month: "", day: "", year: "" },
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>
      <div>
        <label>Phone number</label>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => <input {...field} type="tel" />}
        />
      </div>
      <div>
        <label>Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} type="email" />}
        />
      </div>
      <div>
        <label>Password</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input {...field} type="password" />}
        />
      </div>
      <div>
        <label>Confirm password</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => <input {...field} type="password" />}
        />
      </div>
      <div>
        <label>Date of birth</label>
        <div>
          <Controller
            name="birthDate.month"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            )}
          />
          <Controller
            name="birthDate.day"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                placeholder="Day"
                min="1"
                max="31"
              />
            )}
          />
          <Controller
            name="birthDate.year"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                placeholder="Year"
                min="1900"
                max={new Date().getFullYear()}
              />
            )}
          />
        </div>
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default SignUpForm;
