import express from "express";
import { 
    createProductCategory, deleteProductCategory, 
    getAllProductCategory, getProductCategoryById, 
    updateProductCategory } from "../controllers/productCategory.controller.js";

const router = express.Router();

router.post("/create", createProductCategory);

router.get('/', getAllProductCategory);
router.get('/:id', getProductCategoryById);

router.put('/update/:id', updateProductCategory);

router.delete('/delete/:id', deleteProductCategory);

export default router;