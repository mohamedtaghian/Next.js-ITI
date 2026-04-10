import mongoose from "mongoose";

const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/next_crud";

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL not found");
}

let isConnected = false;

async function dbConnect() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGODB_URL);
    isConnected = db.connections[0].readyState;
    console.log("Mongoose is connected");
  } catch (err) {
    console.log(err);
  }
}

export default dbConnect;
