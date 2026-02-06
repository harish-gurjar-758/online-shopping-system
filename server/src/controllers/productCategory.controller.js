import ProductCategory from "../modules/productCategory.module.js";
import cloudinary from "../config/cloudinary.js";

// Create Product category
export const createProductCategory = async (req, res) => {
    try {
        const {
            categoryName,
            description
        } = req.body;

        // Access uploaded files
        const logo = req.file ? req.file.path : null;

        const productCategory = await ProductCategory.create({
            categoryName,
            description,
            logo
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

// Get total product category count
export const getProductCategoryCount = async (req, res) => {
  try {
    const totalCount = await ProductCategory.countDocuments();

    res.status(200).json({
      success: true,
      totalCategories: totalCount,
    });

  } catch (error) {
    console.error("Category Count Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch product category count",
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
        const { categoryName, description } = req.body;

        const updateData = {
            categoryName,
            description,
        };

        // HANDLE LOGO UPDATE PROPERLY
        if (req.file) {
            updateData.logo = req.file.path; // Cloudinary URL
        }

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
export const deleteProductCategory = async (req, res) => {
    try {
        const productCategory = await ProductCategory.findById(req.params.id);

        if (!productCategory) {
            return res.status(404).json({
                success: false,
                message: "Product Category not found",
            });
        }

        // DELETE LOGO FROM CLOUDINARY
        if (productCategory.logo) {
            // Extract public_id from Cloudinary URL
            const publicId = productCategory.logo
                .split("/")
                .pop()
                .split(".")[0];

            await cloudinary.uploader.destroy(publicId);
        }

        // DELETE CATEGORY FROM DB
        await ProductCategory.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Product Category deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};