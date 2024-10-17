import mongoose from "mongoose";
import Pesticide from "./models/pesticide.js"; // Ensure correct import

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Agridiagnosis") // Use environment variable for connection
    .then(() => console.log("Connected to the database"))
    .catch((error) => console.log("Database connection error:", error));

// Array of pesticides to be added
const pesticides = [
    {
        "name": "Potato Late Blight",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/Mizu-Chlorothalonil-Product-Mount-45-Mancozeb/dp/B0CHW7XQY1/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Pn8ztV-cAfGCJ3U41SQjyA5NP6vZ4sIvfrdPvZ_s6TbO1NsUPmQwIJaAWKFTrLIdRzmj5Xq1lCqEl9eU-VW5L1w4zNmVjqCMsz5xHEpAoJdUp64lXBXusOkkCwIbzMPX1KPTXVJhLN8k-_8NiLS79IQTyMDh2WvsLGkxI1RprCKULowE_zsb4Nm6hgPgy7ZSy99aNf8j0i4BUT09kVn0AaTWktD-S-lgoD4PNpbB6L6aJvQxKTVrAPCth162WHjyDB09yPAGcFHkUzFgJXM9LuxiDVgl4LxluszmU8e0qkc.5N9DNmtfwprzH_W50EnWb_kAZPXWrmwL5RybWLrOHZU&dib_tag=se&keywords=chlorothalonil&qid=1729153995&sr=8-1",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/mancozeb/s?k=mancozeb",
        "pesticide3": "Metalaxyl 8% + Mancozeb 64% WP",
        "link3": "https://www.amazon.in/RIDOMIL-GOLD-100GMS-METALAXYL-MANCOZEB/dp/B07CTR1ND8"
    },
    

];

// Function to insert pesticides if they don't already exist
const insertPesticides = async () => {
    for (const pesticide of pesticides) {
        const existingPesticide = await Pesticide.findOne({ name: pesticide.name });
        if (!existingPesticide) {
            await Pesticide.create(pesticide);
            console.log(`Added pesticide: ${pesticide.name}`);
        } else {
            console.log(`Pesticide already exists: ${pesticide.name}`);
        }
    }
    mongoose.disconnect(); // Close the connection once done
};

// Call the function to insert pesticides
insertPesticides().catch(error => {
    console.error("Error adding pesticides:", error);
    mongoose.disconnect(); // Close the connection in case of error
});
