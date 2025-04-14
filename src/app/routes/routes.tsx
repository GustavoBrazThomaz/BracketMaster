import { Route, Routes } from "react-router";
import { AuthentificationLayout, DefaultLayout } from "../layout";
import {
  CreateTournament,
  DiscordCode,
  EditTournament,
  Tournament,
} from "@/pages";

function AppRouter() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route element={<Tournament />} path="/" />
        <Route element={<CreateTournament />} path="/tournament-form" />
        <Route element={<EditTournament />} path="/tournament-form/:id" />
      </Route>

      <Route element={<AuthentificationLayout />}>
        <Route element={<DiscordCode />} path="/discord/callback" />
      </Route>
    </Routes>
  );
}

export default AppRouter;
