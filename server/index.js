import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Custom modules
import connectDB from './src/db/connectDB.js';
import authRoutes from './src/routes/userAuth.routes.js';
import productRoutes from './src/routes/product.routes.js';
import productCategoryRoutes from './src/routes/productCategory.routes.js';
import multerErrorHandler from "./src/middleware/multerError.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(multerErrorHandler);
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/product-category', productCategoryRoutes);

// Server Listen
app.listen(PORT, () => {
    console.log(`Server running at : http://localhost:${PORT}`);
});
