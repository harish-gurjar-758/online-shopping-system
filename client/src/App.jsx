import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/CategoryProduct";
import Register from "./Pages/Register";


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}
export default App;