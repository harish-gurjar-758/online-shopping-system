import Product from "../modules/product.module.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";

/**
 * CREATE PRODUCT
 */
export const createProduct = async (req, res) => {
  try {
    const {
      title,
      category,
      oldPrice,
      newPrice,
      shortDescription,
      longDescription,
      productSizes,
      availableStock,
      isActive,
    } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product image is required",
      });
    }

    // Upload images to Cloudinary
    const bannerUrls = [];

    for (const file of req.files) {
      const url = await uploadToCloudinary(file.buffer, "products");
      bannerUrls.push(url);
    }

    const product = await Product.create({
      title,
      category,
      oldPrice: Number(oldPrice),
      newPrice: Number(newPrice),
      shortDescription,
      longDescription,
      productSizes: productSizes ? JSON.parse(productSizes) : [],
      availableStock: Number(availableStock),
      isActive: isActive === "true" || isActive === true,
      banner: bannerUrls,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });

  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getAllProducts = async (req, res) => { }
export const getProductById = async (req, res) => { }
export const updateProduct = async (req, res) => { }
export const deleteProduct = async (req, res) => { }