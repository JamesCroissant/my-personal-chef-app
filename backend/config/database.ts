import mongoose from 'mongoose';

const mongoUrl: string = process.env.MONGOURL!;

if (!mongoUrl) {
  throw new Error('MongoDB URI is not defined in .env file');
}

const connectToDB = mongoose.connect(mongoUrl as string).then(() => {
  console.log("Connected to the database");
}).catch((err) => {
  console.error(err);
});

module.exports = connectToDB;