import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { Route, Routes } from "react-router";
import { AuthentificationLayout, DefaultLayout } from "../layout";

function AppRouter() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route element={<Home />} path="/" />
      </Route>

      <Route element={<AuthentificationLayout />}>
        <Route element={<Login />} path="/login" />
      </Route>
    </Routes>
  );
}

export default AppRouter;
