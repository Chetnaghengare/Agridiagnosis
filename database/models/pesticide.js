import mongoose from "mongoose";

// Define Pesticide Schema
const pesticideSchema = new mongoose.Schema({

    name: { type: String, required: true },
    pesticide1: { type: String, required: true },
    link1: { type: String, required: true } ,     
    pesticide2: { type: String, required: true },
    link2: { type: String, required: true } ,
    pesticide3: { type: String, required: true },
    link3: { type: String, required: true } ,
});

// Create Model from Pesticide Schema
const Pesticide = mongoose.model('Pesticide', pesticideSchema);

export default Pesticide;
