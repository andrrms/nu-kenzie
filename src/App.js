import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="app">
      {isLogged ? (
        <DashboardPage setIsLogged={setIsLogged} />
      ) : (
        <LandingPage setIsLogged={setIsLogged} />
      )}
    </div>
  );
}

export default App;
