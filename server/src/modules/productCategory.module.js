import mongoose from "mongoose";

// Product Category Schema
const productCategorySchema = new mongoose.Schema({
    categoryName: { type: String },
    description: { type: String }
});

// Create and export model
const ProductCategory = mongoose.model("ProductCategorys", productCategorySchema);
export default ProductCategory;