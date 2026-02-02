import express from "express";
import upload from "../middleware/upload.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post(
  "/create",
  upload.array("banner", 5), // max 5 images
  createProduct
);

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.put(
  "/update/:id",
  upload.array("banner", 5),
  updateProduct
);

router.delete("/delete/:id", deleteProduct);

export default router;
