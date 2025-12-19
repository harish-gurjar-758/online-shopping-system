import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/CategoryProduct";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import WishList from "./Pages/WishList";


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* All Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />

        {/* Show by category : id */}
        <Route path="/product" element={<Product />} />

        {/* User Register and Login Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* -- */}
        <Route path="/mylist" element={<WishList />} />

      </Routes>

      {/* --- Footer */}
      <Footer />
    </div>
  );
}
export default App;