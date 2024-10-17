import express, { response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine as exphbs } from 'express-handlebars';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';
import Disease from './database/models/disease.js'; // Import the Disease model
// import User from './database/models/signup.js'//import the user signup model.
import User from './database/models/signup.js';

import './database/index.js';  // Ensure that this file handles the database connection

// Set up __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 

// Set up Handlebars as the view engine without layouts
app.engine('hbs', exphbs({ 
    extname: '.hbs',
    defaultLayout: false 
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up multer for file upload handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define routes
app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/upload', (req, res) => {
    res.render('uploads');
});



app.post('/predict', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.render('result', { prediction: "No file uploaded", description: [], treatment: [] });
    }

    const formData = new FormData();
    formData.append('file', req.file.buffer, { filename: req.file.originalname });

    console.log("Sending image to Flask for prediction...");

    try {
        const response = await axios.post('http://localhost:5000/predict', formData, {
            headers: {
                ...formData.getHeaders()
            }
        });
        const predictedDisease = response.data.prediction;

        console.log("Predicted Disease:", predictedDisease);

        // Find the disease in the database
        const diseaseInfo = await Disease.findOne({ name: predictedDisease });
        console.log("Disease Info from DB:", diseaseInfo);

        // Check if the disease information exists
        if (!diseaseInfo) {
            return res.render('result1', { 
                prediction: predictedDisease,
                description: ["No description available."], 
                treatment: ["No treatment available."]
            });
        }

        // Render result with the prediction and disease info
        res.render('result1', { 
            prediction: predictedDisease,
            description: diseaseInfo.description, // Pass as an array
            treatment: diseaseInfo.treatment // Pass as an array
        });

    } catch (error) {
        console.error("Error occurred while sending image to Flask:", error.message);
        res.render('result', { prediction: "Error while predicting the disease.", description: [], treatment: [] });
    }
});

app.post('/signup', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username, // Make sure this matches the 'name' attribute in your form
            email: req.body.email,
            mobileNumber: req.body.mobileNumber, // Make sure this matches the 'name' attribute in your form
            address: req.body.address,
            password: req.body.password
        });
        const registered = await newUser.save();
        res.redirect('/'); // Redirect to login or another page after successful registration
    } catch (error) {
        console.log("Error in registration:", error.message);
        res.status(500).send("An error occurred during registration");
    }
});



app.post('/login',async(req,resp) => {
    const user_pass= req.body.password;
    const userr=await User.findOne({email:req.body.email});
    if(userr){
        if(userr.password===user_pass){
            resp.render('uploads')
    } 
    else{
        resp.render('login',{errorMessage:'authentication failed!incorrect password'});
    }
}

else{
    resp.render('login',{errorMessage:'authentication failed!email not found'});
}

});

app.post('/contact', async (req, res) => {
    try {
        // Create a new contact using the Contact model
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });

        // Save the contact to the database
        await newContact.save();
        console.log("Contact information saved successfully.");

        // Redirect or render a success message/page after submission
        res.render('contact', { successMessage: "Your message has been sent successfully!" });
    } catch (error) {
        console.error("Error saving contact information:", error.message);
        res.render('contact', { errorMessage: "An error occurred while sending your message. Please try again." });
    }
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
