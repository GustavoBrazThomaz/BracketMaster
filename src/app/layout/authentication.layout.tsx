import { Outlet } from "react-router";

export default function AuthentificationLayout() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-muted">
      <Outlet />
    </div>
  );
}
