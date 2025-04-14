import { AuthService } from "@/app/service/authorization.service";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Cookies from "js-cookie";
import { toast } from "sonner";

export default function DiscordCode() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");
  const authService = new AuthService();

  async function AuthUser() {
    if (!code) {
      toast.error("Algo deu errado no login tente novamente", {
        richColors: true,
      });
      navigate("/");
      return;
    }

    try {
      const user = await authService.Post({ code });

      if (!user.isAuthorized) {
        toast.error("Usuário não autorizado", {
          richColors: true,
        });
        navigate("/");
        return;
      }

      Cookies.set("accessToken", user.accessToken);
      Cookies.set("username", user.username);
      Cookies.set("email", user.email);
    } catch {
      toast.error("Algo deu errado no login tente novamente", {
        richColors: true,
      });
      navigate("/");
    }
  }

  useEffect(() => {
    AuthUser();
  }, [code]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-loader-circle-icon lucide-loader-circle animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
