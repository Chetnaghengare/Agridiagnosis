import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables at the very top

//  console.log("MongoDB URI:", process.env.MONGO_URI); // This should log the URI correctly

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://chetnaghengare:Chetna%4007@cluster0.i5xsk.mongodb.net/Agridiagnosis?retryWrites=true&w=majority&appName=Cluster0", {
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
