import express from "express";
import {
    createProductCategory, deleteProductCategory,
    getAllProductCategory, getProductCategoryById,
    getProductCategoryCount,
    updateProductCategory
} from "../controllers/productCategory.controller.js";
import productCategoryUpload from "../middleware/productCategoryLogoUpload.js";

const router = express.Router();

router.post("/create", productCategoryUpload.single('logo'), createProductCategory);

router.get('/total-count', getProductCategoryCount)

router.get('/', getAllProductCategory);
router.get('/:id', getProductCategoryById);

router.put('/update/:id', productCategoryUpload.single('logo'), updateProductCategory);

router.delete('/delete/:id', deleteProductCategory);

export default router;