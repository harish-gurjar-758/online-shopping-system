import express from 'express';
import dotenv from 'dotenv';

// Custom modules
import connectDB from './src/db/connectDB.js';

//  Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Connect to MogoDB
connectDB();

// Server Listen
app.listen(PORT, () => {
    console.log(`Server running at : http://localhost:${PORT}`);
});