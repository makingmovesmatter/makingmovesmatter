import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('❌ Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    console.log('🟢 Using existing MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { dbName: 'mesamovingexperts' }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log('✅ MongoDB connected successfully');
  return cached.conn;
}