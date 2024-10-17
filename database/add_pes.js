import mongoose from "mongoose";
import Pesticide from "./models/pesticide.js"; // Ensure correct import

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Agridiagnosis") // Use environment variable for connection
    .then(() => console.log("Connected to the database"))
    .catch((error) => console.log("Database connection error:", error));

// Array of pesticides to be added
const pesticides = [
    {
        "name": "Strawberry Leaf scorch",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/dp/B0CHW7XQY1?keywords=chlorothalonil",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/mancozeb/s?k=mancozeb",
        "pesticide3": "Copper Hydroxide 50% WP",
        "link3": "https://www.amazon.in/dp/B08H5CT7HK?keywords=copper+hydroxide"
    },
    
    {
        "name": "Potato Late Blight",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/Mizu-Chlorothalonil-Product-Mount-45-Mancozeb/dp/B0CHW7XQY1/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Pn8ztV-cAfGCJ3U41SQjyA5NP6vZ4sIvfrdPvZ_s6TbO1NsUPmQwIJaAWKFTrLIdRzmj5Xq1lCqEl9eU-VW5L1w4zNmVjqCMsz5xHEpAoJdUp64lXBXusOkkCwIbzMPX1KPTXVJhLN8k-_8NiLS79IQTyMDh2WvsLGkxI1RprCKULowE_zsb4Nm6hgPgy7ZSy99aNf8j0i4BUT09kVn0AaTWktD-S-lgoD4PNpbB6L6aJvQxKTVrAPCth162WHjyDB09yPAGcFHkUzFgJXM9LuxiDVgl4LxluszmU8e0qkc.5N9DNmtfwprzH_W50EnWb_kAZPXWrmwL5RybWLrOHZU&dib_tag=se&keywords=chlorothalonil&qid=1729153995&sr=8-1",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/mancozeb/s?k=mancozeb",
        "pesticide3": "Metalaxyl 8% + Mancozeb 64% WP",
        "link3": "https://www.amazon.in/RIDOMIL-GOLD-100GMS-METALAXYL-MANCOZEB/dp/B07CTR1ND8"
    },

    {
        "name": "Apple Apple scab",
        "pesticide1": "Captan 50% WP",
        "link1": "https://www.amazon.in/chlorothalonil/s?k=chlorothalonil",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/mancozeb/s?k=mancozeb",
        "pesticide3": "Myclobutanil 10% WP",
        "link3": "https://www.amazon.com/Gravex-Fungicide-Atticus-Compare-Eagle/dp/B0BTDT8XR9/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Km-jkqMPuboVkDvXGClO9Q.lRLil8OlAxr93ywlrxmxUKSO_s8JD8LkJRmB77thero&dib_tag=se&keywords=myclobutanil&qid=1729155120&sr=8-1"
    },



    {
        "name": "Apple Cedar apple rust",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/chlorothalonil/s?k=chlorothalonil",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/mancozeb/s?k=mancozeb",
        "pesticide3": "Myclobutanil 10% WP",
        "link3": "https://www.amazon.com/myclobutanil/s?k=myclobutanil"
    },


    {
        "name": "Cherry (including_sour) Powdery mildew",
        "pesticide1": "Sulfur 90% WP",
        "link1": "https://www.amazon.in/SULPHUR-POWDER-fertilizer-powder-Application/dp/B0BWWQ9WC5",
        "pesticide2": "Myclobutanil 10% WP",
        "link2": "https://www.amazon.com/myclobutanil/s?k=myclobutanil",
        "pesticide3": "Triadimefon 25% WP",
        "link3": "https://www.awiner.com/product/triadimefon/"
    },



    {
        "name": "Corn (Maize) Cercospora Leaf Spot and Gray Leaf Spot",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/chlorothalonil/s?k=chlorothalonil",
        "pesticide2": "Azoxystrobin 23% SC",
        "link2": "https://www.amazon.in/azoxystrobin-tebuconazole/s?k=azoxystrobin+tebuconazole",
        "pesticide3": "Mancozeb 75% WP",
        "link3": "https://www.amazon.in/mancozeb/s?k=mancozeb"
    },



    {
        "name": "Corn (maize) Common rust",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/chlorothalonil/s?k=chlorothalonil",
        "pesticide2": "Azoxystrobin 23% SC",
        "link2": "https://www.amazon.in/azoxystrobin-tebuconazole/s?k=azoxystrobin+tebuconazole",
        "pesticide3": "Tebuconazole 50% WG",
        "link3": "https://www.amazon.in/tebuconazole/s?k=tebuconazole"
    },



    {
        "name": "Corn (maize) Northern Leaf Blight",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/chlorothalonil/s?k=chlorothalonil",
        "pesticide2": "Azoxystrobin 23% SC",
        "link2": "https://www.amazon.in/azoxystrobin-tebuconazole/s?k=azoxystrobin+tebuconazole",
        "pesticide3": "Tebuconazole 50% WG",
        "link3": "https://www.amazon.in/tebuconazole/s?k=tebuconazole"
    },


    {
        "name": "Grape Black rot",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/chlorothalonil/s?k=chlorothalonil",
        "pesticide2": "Myclobutanil 10% WP",
        "link2": "https://www.amazon.com/myclobutanil/s?k=myclobutanil",
        "pesticide3": "Copper Oxychloride 50% WP",
        "link3": "https://www.amazon.in/copper-oxychloride-50-wp-fungicides/s?k=copper+oxychloride+50+wp+fungicides"
    },



    {
        "name": "Grape Esca (Black_Measles)",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/chlorothalonil/s?k=chlorothalonil",
        "pesticide2": "Myclobutanil 10% WP",
        "link2": "https://www.amazon.com/myclobutanil/s?k=myclobutanil",
        "pesticide3": "Bordeaux Mixture",
        "link3": "https://www.amazon.in/bordeaux-mixture/s?k=bordeaux+mixture"
    },



    {
        "name": "Grape Leaf blight (Isariopsis Leaf Spot)",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/chlorothalonil/s?k=chlorothalonil",
        "pesticide2": "Myclobutanil 10% WP",
        "link2": "https://www.amazon.com/myclobutanil/s?k=myclobutanil",
        "pesticide3": "Tebuconazole 50% WG",
        "link3": "https://www.amazon.in/tebuconazole/s?k=tebuconazole"
    },

    {
        "name": "Orange Haunglongbing (Citrus greening)",
        "pesticide1": "Imidacloprid 17.8% SL",
        "link1": "https://www.amazon.in/imidacloprid/s?k=imidacloprid",
        "pesticide2": "Thiamethoxam 25% WG",
        "link2": "https://www.amazon.in/thiamethoxam-pesticide/s?k=thiamethoxam+pesticide",
        "pesticide3": "Carbaryl 50% WP",
        "link3": "https://www.amazon.in/carbaryl-insecticide/s?k=carbaryl+insecticide"
    },

    {
        "name": "Peach Bacterial spot",
        "pesticide1": "Copper Fungicide",
        "link1": "https://www.amazon.in/s?k=copper+fungicide+for+plants&adgrpid=68516592369&ext_vrnc=hi&hvadid=346076535081&hvdev=c&hvlocphy=9146279&hvnetw=g&hvqmt=b&hvrand=5770873448388837335&hvtargid=kwd-751697445737&hydadcr=9277_1915411&tag=googinhydr1-21&ref=pd_sl_8ctsw1cc7n_b",
        "pesticide2": "Streptomycin 10% WP",
        "link2": "https://www.amazon.in/streptomycin-for-plant/s?k=streptomycin+for+plant",
        "pesticide3": "Bacillus subtilis",
        "link3": "https://www.amazon.in/bacillus-subtilis/s?k=bacillus+subtilis"
    },

    {
        "name": "Pepper, bell Bacterial spot",
        "pesticide1": "Copper Hydroxide",
        "link1": "https://www.amazon.com/HiMedia-GRM4160-500G-Copper-Hydroxide-Phosphate/dp/B00DYODQCI",
        "pesticide2": "Streptomycin 10% WP",
        "link2": "https://www.amazon.in/streptomycin-for-plant/s?k=streptomycin+for+plant",
        "pesticide3": "Bacillus subtilis",
        "link3": "https://www.amazon.in/bacillus-subtilis/s?k=bacillus+subtilis"
    },

     {
        "name": "Pepper, Bell Healthy",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/dp/B0CHW7XQY1?keywords=chlorothalonil",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/mancozeb/s?k=mancozeb",
        "pesticide3": "Bacillus thuringiensis",
        "link3": "https://www.amazon.in/dp/B07KY2F8Z7?keywords=bacillus+thuringiensis"
    },
   {
        "name": "Potato Early blight",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/dp/B0CHW7XQY1?keywords=chlorothalonil",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/mancozeb/s?k=mancozeb",
        "pesticide3": "Copper Hydroxide 50% WP",
        "link3": "https://www.amazon.in/dp/B08H5CT7HK?keywords=copper+hydroxide"
    },

     {
        "name": "Squash Powdery mildew",
        "pesticide1": "Potassium Bicarbonate",
        "link1": "https://www.amazon.in/dp/B08N5RRT7F?keywords=potassium+bicarbonate",
        "pesticide2": "Sulfur 90% WP",
        "link2": "https://www.amazon.in/dp/B09D5VJGQ1?keywords=sulfur",
        "pesticide3": "Neem Oil",
        "link3": "https://www.amazon.in/dp/B07FBN8WL1?keywords=neem+oil"
    },
    {
        "name": "Tomato Bacterial spot",
        "pesticide1": "Copper Hydroxide",
        "link1": "https://www.amazon.in/dp/B08YDDN2B8?keywords=copper+hydroxide",
        "pesticide2": "Streptomycin",
        "link2": "https://www.amazon.in/dp/B07RTZMG87?keywords=streptomycin",
        "pesticide3": "Bacillus subtilis",
        "link3": "https://www.amazon.in/dp/B07F7KTWZ6?keywords=bacillus+subtilis"
    },
     {
        "name": "Tomato Early blight",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/dp/B08P2L8K4W?keywords=chlorothalonil",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/dp/B07VHRD5RJ?keywords=mancozeb",
        "pesticide3": "Azoxystrobin",
        "link3": "https://www.amazon.in/dp/B08YNQKNF4?keywords=azoxystrobin"
    },
    {
        "name": "Tomato Late blight",
        "pesticide1": "Metalaxyl 8% + Mancozeb 64% WP",
        "link1": "https://www.amazon.in/dp/B07CTR1ND8?keywords=metalaxyl+mancozeb",
        "pesticide2": "Ridomil Gold",
        "link2": "https://www.amazon.in/dp/B07CT1TNCW?keywords=ridomil+gold",
        "pesticide3": "Fosetyl-Al",
        "link3": "https://www.amazon.in/dp/B07Z8F3K5D?keywords=fosetyl"
    },
    {
        "name": "Tomato Leaf Mold",
        "pesticide1": "Potassium Bicarbonate",
        "link1": "https://www.amazon.in/dp/B08N5RRT7F?keywords=potassium+bicarbonate",
        "pesticide2": "Neem Oil",
        "link2": "https://www.amazon.in/dp/B07FBN8WL1?keywords=neem+oil",
        "pesticide3": "Sulfur 90% WP",
        "link3": "https://www.amazon.in/dp/B09D5VJGQ1?keywords=sulfur"
    },
   {
        "name": "Tomato Septoria leaf spot",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/dp/B08P2L8K4W?keywords=chlorothalonil",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/dp/B07VHRD5RJ?keywords=mancozeb",
        "pesticide3": "Azoxystrobin",
        "link3": "https://www.amazon.in/dp/B08YNQKNF4?keywords=azoxystrobin"
    },
    {
        "name": "Tomato Spider mites Two-spotted spider mite",
        "pesticide1": "Insecticidal Soap",
        "link1": "https://www.amazon.in/dp/B07KQH47Z3?keywords=insecticidal+soap",
        "pesticide2": "Neem Oil",
        "link2": "https://www.amazon.in/dp/B07FBN8WL1?keywords=neem+oil",
        "pesticide3": "Pyrethrin",
        "link3": "https://www.amazon.in/dp/B08YH4N3X2?keywords=pyrethrin"
    },
    {
        "name": "Tomato Target Spot",
        "pesticide1": "Chlorothalonil 75% WP",
        "link1": "https://www.amazon.in/dp/B08P2L8K4W?keywords=chlorothalonil",
        "pesticide2": "Mancozeb 75% WP",
        "link2": "https://www.amazon.in/dp/B07VHRD5RJ?keywords=mancozeb",
        "pesticide3": "Azoxystrobin",
        "link3": "https://www.amazon.in/dp/B08YNQKNF4?keywords=azoxystrobin"
    },
    {
        "name": "Tomato Yellow Leaf Curl Virus",
        "pesticide1": "Insecticidal Soap",
        "link1": "https://www.amazon.in/dp/B07KQH47Z3?keywords=insecticidal+soap",
        "pesticide2": "Neem Oil",
        "link2": "https://www.amazon.in/dp/B07FBN8WL1?keywords=neem+oil",
        "pesticide3": "Imidacloprid",
        "link3": "https://www.amazon.in/dp/B08HR4ZGRT?keywords=imidacloprid"
    },
    {
        "name": "Tomato mosaic virus",
        "pesticide1": "No effective pesticide",
        "link1": "https://www.amazon.in/dp/B07Z8GVRSL?keywords=tomato+mosaic+virus",
        "pesticide2": "Cultural control recommended",
        "link2": "https://www.amazon.in/dp/B08B3G6C3R?keywords=cultural+control",
        "pesticide3": "Sanitation measures",
        "link3": "https://www.amazon.in/dp/B08M6RQFGZ?keywords=sanitation+measures"
    }
    
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
