import mongoose from "mongoose";

// Define Disease Schema
const diseaseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: [String], required: true }, // Changed to array of strings
    treatment: { type: [String], required: true }    // Changed to array of strings
});

const Disease = mongoose.model('Disease', diseaseSchema);

export default Disease;
