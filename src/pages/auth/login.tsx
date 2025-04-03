import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-muted">
      <LoginForm className="max-w-3xl w-full" />
    </div>
  );
}
