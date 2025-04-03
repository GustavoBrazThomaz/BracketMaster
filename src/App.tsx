import { BrowserRouter } from "react-router";
import AppRouter from "./app/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
