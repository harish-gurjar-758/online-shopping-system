import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/Header";

// ----
import Dashboard from "./Pages/Dashboard";

// ---
import AddNewProductCategory from "./Pages/ProductCategory/AddNewProductCategory";

// ---
import AddNewProduct from "./Pages/Products/AddNewProduct";
import ProductCategoryList from "./Pages/ProductCategory/ProductCategoryList";

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
        <Route path="/admin/product-category-list" element={<ProductCategoryList />} />

        {/* Product */}
        <Route path="/admin/add-product" element={<AddNewProduct />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

