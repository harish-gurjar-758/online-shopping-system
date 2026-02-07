import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/Header";

// ----
import Dashboard from "./Pages/Dashboard";

// ---
import AddNewProductCategory from "./Pages/ProductCategory/AddNewProductCategory";
import ProductCategoryList from "./Pages/ProductCategory/ProductCategoryList";
import UpdateProductCategory from "./Pages/ProductCategory/UpdateProductCategory";

// ---
import AddNewProduct from "./Pages/Products/AddNewProduct";
import ProductList from "./Pages/Products/ProductList";
import UpdateProduct from "./Pages/Products/UpdateProduct";

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
        <Route path="/admin/update-product-category/:id" element={<UpdateProductCategory />} />

        {/* Product */}
        <Route path="/admin/add-product" element={<AddNewProduct />} />
        <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
        <Route path="/admin/product-list" element={<ProductList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

