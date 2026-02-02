import Product from "../models/Product.js";

/**
 * CREATE PRODUCT (with multiple banners)
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
    } = req.body;

    // multiple images
    const banners = req.files?.map(
      (file) => `${req.protocol}://${req.get("host")}/uploads/products/${file.filename}`
    );

    const product = await Product.create({
      title,
      category,
      oldPrice,
      newPrice,
      shortDescription,
      longDescription,
      productSizes: productSizes ? JSON.parse(productSizes) : [],
      availableStock,
      banner: banners,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * GET ALL PRODUCTS
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET SINGLE PRODUCT
 */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * UPDATE PRODUCT
 */
export const updateProduct = async (req, res) => {
  try {
    const banners = req.files?.map(
      (file) => `${req.protocol}://${req.get("host")}/uploads/products/${file.filename}`
    );

    const updatedData = {
      ...req.body,
    };

    if (banners && banners.length > 0) {
      updatedData.banner = banners;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * DELETE PRODUCT
 */
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
