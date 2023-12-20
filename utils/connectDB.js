import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error(`Connection Failed To DB :${error} `);
  }
};
export default connectDB;
