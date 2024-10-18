import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.log("Error");
    process.exit(1);
  }
};
