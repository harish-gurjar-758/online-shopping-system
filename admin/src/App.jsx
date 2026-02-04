import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import AddNewProductCategory from "./Pages/ProductCategory/AddNewProductCategory";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />


        {/* Product category */}
        <Route path="/admin/add-product-category" element={<AddNewProductCategory />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

