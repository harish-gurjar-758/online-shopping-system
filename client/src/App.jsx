import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/Complonants/NavBar/NavBar";
import Registration from "./assets/Pages/Registration";
import Home from "./assets/Pages/Home";
import LandingPage from "./assets/Pages/LandingPage";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      {/* All Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
