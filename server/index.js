import express from 'express';
import dotenv from 'dotenv';

//  Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Server Listen
app.listen(PORT, () => {
    console.log(`Server running at : http://localhost:${PORT}`);
});