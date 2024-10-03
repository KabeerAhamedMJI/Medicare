import mongoose from "mongoose"; 

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_DB_URL);
    
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    }
}
