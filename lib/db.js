import mongoose from 'mongoose';

const connection = {};

export async function connectDB() {
  if (connection.isConnected) {
    console.log('🟢 Using existing MongoDB connection');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'mesamovingexperts',
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err;
  }
}