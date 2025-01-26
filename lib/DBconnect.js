import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database smitbackendhackathon");
  } catch (err) {
    console.error("Error connecting to the database:", {
      message: err.message,
      stack: err.stack,
      code: err.code,
      hostname: err.hostname,
    });
  }
}
