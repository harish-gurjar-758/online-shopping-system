const multerErrorHandler = (err, req, res, next) => {
  if (err instanceof Error && err.message.includes("File too large")) {
    return res.status(400).json({
      success: false,
      message: "Image size must be less than 10MB",
    });
  }

  next(err);
};

export default multerErrorHandler;