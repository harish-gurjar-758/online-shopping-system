import multer from "multer";

const storage = multer.diskStorage({}); // temp storage

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB per image
});

export default upload;
