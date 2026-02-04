import ProductCategory from "../modules/productCategory.module.js";

// Create Product category
export const createProductCategory = async (req, res) => {
    try {
        const {
            categoryName,
            description
        } = req.body;

        const productCategory = await ProductCategory.create({
            categoryName,
            description
        });

        res.status(201).json({
            success: true,
            message: "Product Category created successfully",
            productCategory,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get all Product Category
export const getAllProductCategory = async (req, res) => {
    try {
        const productCategory = await ProductCategory.find()
        res.json({
            success: true,
            productCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Single product category
export const getProductCategoryById = async (req, res) => {
    try {
        const productCategory = await ProductCategory.findById(req.params.id);

        if (!productCategory) {
            return res.status(404).json({
                success: false,
                message: "Product Category not found"
            });
        }

        res.json({
            success: true,
            productCategory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// update product category
export const updateProductCategory = async (req, res) => {
    try {
        const updateData = { ...req.body, };

        const productCategory = await ProductCategory.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.json({
            success: true,
            message: "Product Category Updated Successfully",
            productCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Product Category
export const deleteProductCategory = async (req, res)=>{
    try {
        await ProductCategory.findByIdAndDelete(req.params.id);

        res.json({
            success:true,
            message:"Product Deleted Succedssfully",
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};