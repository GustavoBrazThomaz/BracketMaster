import { BrowserRouter } from "react-router";
import AppRouter from "./app/routes/routes";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
