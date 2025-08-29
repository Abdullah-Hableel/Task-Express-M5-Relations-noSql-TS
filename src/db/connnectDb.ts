import mongoose from "mongoose";
import config from "../config";
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(config.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDb;
