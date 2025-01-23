import ThemeProvider from "@/app/providers/ThemeProvider";
import LoginForm from "@/widgets/LoginForm";

export default function LoginPage() {
  return (
    <ThemeProvider>
      <LoginForm />
    </ThemeProvider>
  );
}
