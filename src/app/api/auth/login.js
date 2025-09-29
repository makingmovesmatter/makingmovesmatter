import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

const adminUser = {
  email: 'admin@example.com',
  passwordHash: '$2a$12$xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // bcrypt hash of password
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (email !== adminUser.email) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, adminUser.passwordHash);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

  // Optionally: Set HttpOnly cookie
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`);

  return res.status(200).json({ token });
}
