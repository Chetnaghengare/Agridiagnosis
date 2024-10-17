import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables at the very top

//  console.log("MongoDB URI:", process.env.MONGO_URI); // This should log the URI correctly

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Agridiagnosis", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
};

export default connectDB;
