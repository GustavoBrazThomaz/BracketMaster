import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import { Route, Routes } from "react-router";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login/>} path="/login"/>
    </Routes>
  );
}

export default AppRouter;
