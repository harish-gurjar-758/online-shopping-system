import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Custom modules
import connectDB from './src/db/connectDB.js';
import authRoutes from './src/routes/userAuth.routes.js'

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());

app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api', authRoutes);

// Server Listen
app.listen(PORT, () => {
    console.log(`Server running at : http://localhost:${PORT}`);
});
