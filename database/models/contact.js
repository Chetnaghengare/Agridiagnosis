import mongoose from 'mongoose';

// Define the contact schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                // Simple email regex validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 10 // Ensures that the message isn't too short
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create a model from the schema
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
