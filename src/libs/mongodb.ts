import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://nextjsaws:YyubFaUs5vZeSund@nextjs.ry8c3qq.mongodb.net/?retryWrites=true&w=majority";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI must be defined");
}

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI);
    if (connection.readyState === 1) {
      console.log("MongoDB Connected");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};