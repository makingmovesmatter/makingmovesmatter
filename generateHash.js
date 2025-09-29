const bcrypt = require('bcryptjs');
const { connectDB } = require('./lib/db'); // adjust path
const User = require('./models/user');      // adjust path

async function seedAdmin() {
  await connectDB();

  const email = 'admin@example.com';      // Admin email
  const password = 'Admin@123';           // Admin password
  const passwordHash = await bcrypt.hash(password, 12);

  // Check if admin already exists
  const existingAdmin = await User.findOne({ email });
  if (existingAdmin) {
    console.log('Admin already exists!');
    process.exit(0);
  }

  // Create admin
  const admin = new User({
    email,
    passwordHash,
    failedAttempts: 0,
    lockUntil: null,
  });

  await admin.save();
  console.log('✅ Admin created successfully!');
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  process.exit(0);
}

seedAdmin().catch((err) => {
  console.error('❌ Error creating admin:', err);
  process.exit(1);
});