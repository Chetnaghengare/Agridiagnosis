import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    mobileNumber: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, 'Please fill a valid mobile number'],
        unique: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the schema as a model
const User = mongoose.model('User', userSchema);
export default User; // Export as a default export
