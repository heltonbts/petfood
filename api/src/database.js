import mongoose from "mongoose";

mongoose.set("debug", true);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://admin:password123@localhost:27017/petfood?authSource=admin"
    );
    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
