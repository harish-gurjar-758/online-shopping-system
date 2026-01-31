import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategorys", // must match model name
      required: true,
    },

    banner: [
      {
        type: String, // image URLs
      },
    ],

    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    oldPrice: {
      type: Number,
      required: true,
    },

    newPrice: {
      type: Number,
      required: true,
    },

    longDescription: {
      type: String,
    },

    shortDescription: {
      type: String,
    },

    productSizes: [
      {
        type: String, // S, M, L, XL, etc.
      },
    ],

    availableStock: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

// Export model
const Product = mongoose.model("Products", productSchema);
export default Product;
