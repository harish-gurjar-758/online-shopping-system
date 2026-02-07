import express from "express";
import productUpload from "../middleware/productUpload.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductCount,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post(
  "/create",
  productUpload.array("banner", 10), 
  createProduct
);

router.get('/total-count', getProductCount);

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.put(
  "/update/:id",
  productUpload.array("banner", 5),
  updateProduct
);

router.delete("/delete/:id", deleteProduct);

export default router;
