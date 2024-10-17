import mongoose from "mongoose";

// Define Pesticide Schema
const pesticideSchema = new mongoose.Schema({

    name: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },    // URL or base64 string of the image
    price: { type: Number, required: true },    // Price of the pesticide
    description: { type: String, required: true },  // Brief description of the pesticide
    rating: { type: Number, min: 0, max: 5 },   // Rating of the pesticide (optional)
    link: { type: String, required: true }      // URL to the e-commerce site
});

// Create Model from Pesticide Schema
const Pesticide = mongoose.model('Pesticide', pesticideSchema);

export default Pesticide;
