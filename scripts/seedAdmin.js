import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/user';
import { connectDB } from '../lib/db.js';

async function seedAdmin() {
  await connectDB();

  const email = 'admin@example.com';
  const password = 'Admin@123'; // Change this to your desired password
  const passwordHash = await bcrypt.hash(password, 10); // bcrypt hash

  // Check if admin already exists
  const existingAdmin = await User.findOne({ email });
  if (existingAdmin) {
    console.log('Admin already exists!');
    process.exit(0);
  }

  const admin = new User({
    email,
    passwordHash,
    failedAttempts: 0,
    lockUntil: null,
  });

  await admin.save();
  console.log('Admin user created:');
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  process.exit(0);
}

seedAdmin().catch(err => {
  console.error(err);
  process.exit(1);
});