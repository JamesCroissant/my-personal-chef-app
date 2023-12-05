import mongoose from 'mongoose';

const mongoUrl: string = process.env.MONGOURL!;

if (!mongoUrl) {
  throw new Error('MongoDB URI is not defined in .env file');
}

export const connectToDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
};
