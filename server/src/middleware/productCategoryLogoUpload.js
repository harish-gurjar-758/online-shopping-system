import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../db/CloudnaryDB.js";

// Configure cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "product-category", // fix typo: 'examinetion-category'
      allowed_formats: ["jpg", "jpeg", "png", "av", "gif", "avif"],
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    };
  },
});

// Create multer instance with cloudinary storage
const productCategoryUpload = multer({ storage });

export default productCategoryUpload;