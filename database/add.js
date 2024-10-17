import mongoose from "mongoose";
import Disease from "./models/disease.js"; // Correct import

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Agridiagnosis") // Use environment variable for connection
    .then(() => console.log("Connected to the database"))
    .catch((error) => console.log("Database connection error:", error));

// Array of diseases to be added
const diseases = [
    {
        "name": "Apple Apple scab",
        "description": [
            "A common fungal disease affecting apple trees, leading to leaf spots and fruit lesions.",
            "Can significantly reduce fruit yield and tree health if not managed.",
            "Prefers warm and humid conditions for development."
        ],
        "treatment": [
            "Implement proper sanitation practices to remove infected debris.",
            "Use fungicides specifically designed for apple scab control.",
            "Practice crop rotation to reduce the incidence of disease."
        ]
    } ,
    {
        "name": "Apple Black rot",
        "description": [
            "A fungal disease that causes dark, sunken lesions on apples.",
            "Infected fruit may drop prematurely or remain on the tree and mummify.",
            "Can lead to significant crop losses if not controlled."
        ],
        "treatment": [
            "Remove and destroy infected fruit and leaves to reduce the source of infection.",
            "Apply fungicides during the flowering period for effective prevention.",
            "Practice crop rotation and select resistant apple varieties."
        ]
    },
    {
        "name": "Apple Cedar apple rust",
        "description": [
            "A fungal disease that requires both apple and cedar trees to complete its life cycle.",
            "Causes yellow-orange spots on the upper surfaces of apple leaves.",
            "Severe infections can lead to premature leaf drop."
        ],
        "treatment": [
            "Remove nearby cedar trees to reduce disease incidence.",
            "Use fungicides to protect apple trees during the growing season.",
            "Choose resistant apple varieties when planting."
        ]
    },
    {
        "name": "Apple healthy",
        "description": [
            "Indicates that the apple trees are free from significant diseases.",
            "Healthy trees exhibit strong growth and produce abundant fruit.",
            "Regular monitoring and care are essential to maintain health."
        ],
        "treatment": [
            "Ensure adequate water and nutrients for optimal growth.",
            "Monitor for pests and diseases regularly.",
            "Prune trees to improve air circulation and light penetration."
        ]
    },
    {
        "name": "Blueberry healthy",
        "description": [
            "Represents healthy blueberry plants that are free from diseases.",
            "Healthy plants show vigorous growth and abundant fruit production.",
            "Proper care and maintenance are key to plant health."
        ],
        "treatment": [
            "Provide sufficient water, especially during dry periods.",
            "Fertilize appropriately based on soil tests.",
            "Monitor for pests and diseases and manage them promptly."
        ]
    },
    {
        "name": "Cherry (including_sour) Powdery mildew",
        "description": [
            "A fungal disease that appears as white, powdery spots on leaves and fruit.",
            "Can lead to reduced fruit quality and yield if left unchecked.",
            "Thrives in warm, dry conditions."
        ],
        "treatment": [
            "Apply fungicides at the first signs of infection.",
            "Ensure proper air circulation and spacing between trees.",
            "Prune affected plant parts to reduce disease spread."
        ]
    },
    {
        "name": "Cherry (including_sour) healthy",
        "description": [
            "Indicates that cherry trees are healthy and free from major diseases.",
            "Healthy trees exhibit good growth and fruit production.",
            "Regular maintenance helps prevent disease."
        ],
        "treatment": [
            "Provide consistent watering and fertilization.",
            "Monitor for signs of pests and diseases regularly.",
            "Prune trees for better air circulation and light access."
        ]
    },
    {
        "name": "Corn (Maize) Cercospora Leaf Spot and Gray Leaf Spot",
        "description": [
            "A complex of two fungal diseases causing dark spots on maize leaves.",
            "Infection can lead to reduced photosynthesis and lower yields.",
            "Favorable conditions include warm temperatures and high humidity."
        ],
        "treatment": [
            "Rotate crops to reduce the risk of disease recurrence.",
            "Apply fungicides if infections are severe.",
            "Maintain proper soil health and nutrition for resistant plants."
        ]
    },
    {
        "name": "Corn (maize) Common rust",
        "description": [
            "A fungal disease that causes reddish-brown pustules on the leaves.",
            "Can reduce yield and quality of maize significantly.",
            "Infection is favored by warm, humid conditions."
        ],
        "treatment": [
            "Use resistant maize varieties when possible.",
            "Apply fungicides at the early stages of infection.",
            "Practice crop rotation to reduce disease incidence."
        ]
    },
    {
        "name": "Corn (maize) Northern Leaf Blight",
        "description": [
            "A fungal disease characterized by long, elliptical gray-green lesions on leaves.",
            "Severe infections can lead to significant yield losses.",
            "Favorable conditions include warm, wet weather."
        ],
        "treatment": [
            "Plant resistant hybrids and varieties.",
            "Use fungicides if needed, especially during wet weather.",
            "Maintain good field hygiene by removing debris."
        ]
    },
    {
        "name": "Corn (maize) healthy",
        "description": [
            "Indicates that maize plants are healthy and free from diseases.",
            "Healthy plants show good growth and produce well.",
            "Consistent care is important for maintaining plant health."
        ],
        "treatment": [
            "Ensure adequate moisture and nutrients.",
            "Monitor for pests and diseases regularly.",
            "Implement crop rotation to promote soil health."
        ]
    }, 
    {
        "name": "Grape Black rot",
        "description": [
            "A fungal disease that causes black lesions on grape berries and leaves.",
            "Infected fruit may shrivel and fall off the vine.",
            "Warm, wet conditions favor the spread of this disease."
        ],
        "treatment": [
            "Remove and destroy infected fruit and leaves to reduce the source of infection.",
            "Apply fungicides at key growth stages to prevent infection.",
            "Maintain good air circulation around the vines."
        ]
    },
    {
        "name": "Grape Esca (Black_Measles)",
        "description": [
            "A complex of diseases that affect grapevines, leading to leaf and fruit decline.",
            "Symptoms include yellowing leaves and dark streaks in the wood.",
            "Esca can cause significant yield losses and is challenging to manage."
        ],
        "treatment": [
            "Prune out infected wood and destroy affected plant material.",
            "Avoid excessive irrigation and manage vine nutrition carefully.",
            "Plant resistant varieties when possible."
        ]
    },
    {
        "name": "Grape Leaf blight (Isariopsis Leaf Spot)",
        "description": [
            "A fungal disease that causes circular, dark lesions on grape leaves.",
            "Severe infections can lead to premature leaf drop and reduced photosynthesis.",
            "Optimal conditions for the disease include high humidity and warm temperatures."
        ],
        "treatment": [
            "Remove and destroy infected leaves to prevent spread.",
            "Use fungicides during high-risk periods of wet weather.",
            "Ensure proper vineyard management practices to reduce stress on plants."
        ]
    },
    {
        "name": "Grape healthy",
        "description": [
            "Indicates that grapevines are free from significant diseases.",
            "Healthy plants show vigorous growth and produce abundant fruit.",
            "Regular monitoring and care are essential to maintain health."
        ],
        "treatment": [
            "Provide adequate water and nutrients for optimal growth.",
            "Monitor for pests and diseases regularly.",
            "Practice good vineyard sanitation."
        ]
    },
    {
        "name": "Orange Haunglongbing (Citrus greening)",
        "description": [
            "A bacterial disease that affects citrus trees, causing yellowing leaves and misshapen fruit.",
            "Typically leads to tree decline and eventual death.",
            "Spread by insect vectors, particularly the Asian citrus psyllid."
        ],
        "treatment": [
            "Remove and destroy infected trees to limit the spread of the disease.",
            "Control insect vectors with appropriate insecticides.",
            "Use resistant rootstocks and maintain tree health."
        ]
    },
    {
        "name": "Peach Bacterial spot",
        "description": [
            "A bacterial disease that causes dark, sunken spots on leaves and fruit.",
            "Can lead to premature leaf drop and reduced fruit quality.",
            "Favorable conditions include wet weather and high humidity."
        ],
        "treatment": [
            "Remove infected plant debris and practice crop rotation.",
            "Use resistant varieties when planting peaches.",
            "Apply appropriate bactericides during critical growth stages."
        ]
    },
    {
        "name": "Peach healthy",
        "description": [
            "Indicates that peach trees are healthy and free from significant diseases.",
            "Healthy trees exhibit good growth and fruit production.",
            "Regular maintenance helps prevent disease."
        ],
        "treatment": [
            "Provide consistent watering and fertilization.",
            "Monitor for signs of pests and diseases regularly.",
            "Prune trees for better air circulation and light access."
        ]
    },
    {
        "name": "Pepper, bell Bacterial spot",
        "description": [
            "A bacterial disease characterized by dark spots on the leaves and fruit.",
            "Infection can lead to reduced yield and fruit quality.",
            "Warm, wet conditions favor disease development."
        ],
        "treatment": [
            "Rotate crops and avoid planting susceptible varieties in the same location.",
            "Use resistant pepper varieties when possible.",
            "Implement good sanitation practices in the garden."
        ]
    },
    {
        "name": "Pepper, bell healthy",
        "description": [
            "Represents healthy bell pepper plants that are free from diseases.",
            "Healthy plants show vigorous growth and produce well.",
            "Consistent care is important for maintaining plant health."
        ],
        "treatment": [
            "Ensure adequate moisture and nutrients.",
            "Monitor for pests and diseases regularly.",
            "Implement crop rotation to promote soil health."
        ]
    },
    {
        "name": "Potato Early blight",
        "description": [
            "A fungal disease that causes dark, concentric lesions on potato leaves.",
            "Infected plants may experience reduced yield and poor quality tubers.",
            "Wet weather conditions favor the spread of early blight."
        ],
        "treatment": [
            "Remove infected plant debris and practice crop rotation.",
            "Use fungicides at the early signs of infection.",
            "Select resistant potato varieties for planting."
        ]
    },
    {
        "name": "Potato Late Blight",
        "description": [
            "A serious fungal disease that can devastate potato crops.",
            "Symptoms include dark, water-soaked lesions on leaves and stems.",
            "Can spread rapidly in wet, humid conditions."
        ],
        "treatment": [
            "Remove and destroy infected plants immediately.",
            "Apply fungicides at the first sign of infection.",
            "Rotate crops to prevent recurrence in the following seasons."
        ]
    },
    {
        "name": "Potato healthy",
        "description": [
            "Indicates that potato plants are healthy and free from significant diseases.",
            "Healthy plants produce strong growth and quality tubers.",
            "Regular monitoring and care are essential to maintain health."
        ],
        "treatment": [
            "Provide adequate water and nutrients for optimal growth.",
            "Monitor for pests and diseases regularly.",
            "Practice good crop rotation and soil management."
        ]
    },
    {
        "name": "Raspberry healthy",
        "description": [
            "Represents healthy raspberry plants that show vigorous growth.",
            "Healthy plants yield abundant, high-quality fruit.",
            "Regular care and maintenance help prevent disease."
        ],
        "treatment": [
            "Ensure proper watering and fertilization.",
            "Monitor for pests and diseases regularly.",
            "Implement good garden sanitation practices."
        ]
    },
    {
        "name": "Soybean healthy",
        "description": [
            "Indicates that soybean plants are healthy and free from diseases.",
            "Healthy plants demonstrate strong growth and productivity.",
            "Consistent care is important for maintaining plant health."
        ],
        "treatment": [
            "Provide adequate nutrients and moisture for optimal growth.",
            "Rotate crops to prevent disease buildup in the soil.",
            "Monitor for pests and diseases regularly."
        ]
    },
    {
        "name": "Squash Powdery mildew",
        "description": [
            "A fungal disease characterized by white, powdery spots on leaves.",
            "Can lead to leaf curling and reduced fruit yield.",
            "Thrives in warm, dry conditions."
        ],
        "treatment": [
            "Remove and destroy infected leaves to reduce spore spread.",
            "Apply fungicides at the first sign of infection.",
            "Ensure adequate spacing between plants for air circulation."
        ]
    },
    {
        "name": "Strawberry Leaf scorch",
        "description": [
            "A condition in strawberries that causes leaf margins to scorch and brown.",
            "Affected plants may exhibit stunted growth and reduced fruit quality.",
            "Commonly caused by environmental stress and inadequate water."
        ],
        "treatment": [
            "Ensure consistent watering, particularly during dry spells.",
            "Use mulch to maintain soil moisture and regulate temperature.",
            "Remove infected leaves to prevent the spread of stress."
        ]
    },
    {
        "name": "Strawberry healthy",
        "description": [
            "Indicates that strawberry plants are healthy and free from significant diseases.",
            "Healthy plants produce vigorous growth and abundant fruit.",
            "Regular monitoring and care are essential to maintain health."
        ],
        "treatment": [
            "Provide adequate water and nutrients for optimal growth.",
            "Monitor for pests and diseases regularly.",
            "Practice good garden sanitation."
        ]
    },
    {
        "name": "Tomato Bacterial spot",
        "description": [
            "A bacterial disease that causes dark spots on tomato leaves and fruit.",
            "Infected plants may show wilting and reduced yield.",
            "Spread by splashing water and infected tools."
        ],
        "treatment": [
            "Remove and destroy infected plants to limit spread.",
            "Use drip irrigation to avoid wetting foliage.",
            "Practice crop rotation and maintain good sanitation."
        ]
    },
    {
        "name": "Tomato Early blight",
        "description": [
            "A fungal disease characterized by dark, concentric lesions on leaves.",
            "Can lead to premature leaf drop and reduced fruit quality.",
            "Favored by wet, humid conditions."
        ],
        "treatment": [
            "Remove and destroy infected plant debris.",
            "Apply fungicides during critical growth stages.",
            "Select resistant tomato varieties when planting."
        ]
    },
    {
        "name": "Tomato Late blight",
        "description": [
            "A serious fungal disease that can cause rapid collapse of tomato plants.",
            "Symptoms include water-soaked spots on leaves and stems, leading to decay.",
            "Optimal conditions for the disease are cool and moist."
        ],
        "treatment": [
            "Remove and destroy all infected plants and debris.",
            "Apply fungicides at the first sign of infection.",
            "Ensure good air circulation around plants."
        ]
    },
    {
        "name": "Tomato Leaf Mold",
        "description": [
            "A fungal disease that causes yellow spots on the upper leaf surface and a gray mold on the underside.",
            "Can reduce photosynthesis and lead to lower yields.",
            "Thrives in high humidity and warm temperatures."
        ],
        "treatment": [
            "Improve air circulation around plants to reduce humidity.",
            "Remove infected leaves and debris from the garden.",
            "Apply fungicides designed for leaf mold management."
        ]
    },
    {
        "name": "Tomato Septoria leaf spot",
        "description": [
            "A fungal disease that manifests as small, dark spots with light centers on leaves.",
            "Can cause significant leaf drop, affecting fruit development.",
            "Common in wet, humid conditions."
        ],
        "treatment": [
            "Remove and destroy infected leaves promptly.",
            "Use fungicides at the first sign of infection.",
            "Practice crop rotation to minimize recurrence."
        ]
    },
    {
        "name": "Tomato Spider mites Two-spotted spider mite",
        "description": [
            "Tiny pests that can cause significant damage to tomato plants by feeding on plant sap.",
            "Symptoms include stippled leaves and webbing on plants.",
            "Favored by hot, dry conditions."
        ],
        "treatment": [
            "Introduce beneficial insects like ladybugs to control populations.",
            "Apply miticides or insecticidal soaps to affected plants.",
            "Increase humidity around plants to deter spider mites."
        ]
    },
    {
        "name": "Tomato Target Spot",
        "description": [
            "A fungal disease characterized by dark spots with concentric rings on leaves.",
            "Can lead to leaf drop and reduced fruit quality.",
            "Thrives in warm, humid environments."
        ],
        "treatment": [
            "Remove and destroy infected plant parts to limit spread.",
            "Use fungicides as preventive measures.",
            "Ensure proper spacing for good air circulation."
        ]
    },
    {
        "name": "Tomato Yellow Leaf Curl Virus",
        "description": [
            "A viral disease that causes yellowing and curling of leaves.",
            "Can severely stunt plant growth and reduce yield.",
            "Spread by whiteflies and other insect vectors."
        ],
        "treatment": [
            "Remove and destroy infected plants to prevent virus spread.",
            "Control whitefly populations using insecticides or traps.",
            "Practice good sanitation to reduce pest reservoirs."
        ]
    },
    {
        "name": "Tomato mosaic virus",
        "description": [
            "A viral infection that leads to mottled leaves and stunted growth.",
            "Can cause severe yield losses and poor fruit quality.",
            "Spread through contaminated tools, seeds, and insects."
        ],
        "treatment": [
            "Remove and destroy infected plants immediately.",
            "Use virus-free seeds and practice good garden sanitation.",
            "Control aphids, which can spread the virus."
        ]
    },
    {
        "name": "Tomato healthy",
        "description": [
            "Indicates that tomato plants are healthy and free from diseases.",
            "Healthy plants produce strong growth and high-quality fruit.",
            "Regular care and monitoring are essential for maintaining health."
        ],
        "treatment": [
            "Provide adequate water and nutrients for optimal growth.",
            "Monitor for pests and diseases regularly.",
            "Implement good gardening practices to support plant health."
        ]
    },
        
];

// Function to insert diseases if they don't already exist
const insertDiseases = async () => {
    for (const disease of diseases) {
        const existingDisease = await Disease.findOne({ name: disease.name });
        if (!existingDisease) {
            await Disease.create(disease);
            console.log(`Added disease: ${disease.name}`);
        } else {
            console.log(`Disease already exists: ${disease.name}`);
        }
    }
    mongoose.disconnect(); // Close the connection once done
};

// Call the function to insert diseases
insertDiseases().catch(error => {
    console.error("Error adding diseases:", error);
    mongoose.disconnect(); // Close the connection in case of error
});
