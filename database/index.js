import express from "express";
import connectDB from "./db.js"; // Ensure the path is correct
import Disease from "./models/disease.js"; // Ensure the path is correct
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 7000; // This will use the environment variable or default to 7000

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Route to create a new disease
app.post('/diseases', async (req, res) => {
    try {
        const disease = new Disease(req.body);
        await disease.save();
        res.status(201).send(disease);
    } catch (error) {
        res.status(400).send(error);
    }
});
