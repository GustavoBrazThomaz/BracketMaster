import { AppBar } from "@/components";
import { Outlet } from "react-router";

export default function AuthentificationLayout() {
  return (
    <div>
      <AppBar />
      <div className="w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
}
