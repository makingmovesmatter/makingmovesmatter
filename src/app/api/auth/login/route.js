import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../../../models/user";
import IPAttempt from "../../../../../models/ipAttempt";
import { connectDB } from "../../../../../lib/db";
import { sendIPVerificationEmail } from "../../../../../lib/ipVerificationEmail";

const MAX_ATTEMPTS = 5;
const LOCK_TIME = 60 * 60 * 1000; // 1 hour

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();
  const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';

  if (!email || !password) 
    return NextResponse.json({ message: 'Email & password required' }, { status: 400 });

  // Fetch or create IP record
  let ipRecord = await IPAttempt.findOne({ ip });
  if (!ipRecord) {
    ipRecord = new IPAttempt({ ip });
  } else {
    // Clean up if lock expired
    if (ipRecord.lockUntil && Date.now() > ipRecord.lockUntil.getTime()) {
      await IPAttempt.deleteOne({ ip });
      ipRecord = new IPAttempt({ ip }); // reset new record
    }
  }

  // Check if IP is locked
  if (ipRecord.lockUntil && Date.now() < ipRecord.lockUntil.getTime()) {
    return NextResponse.json({
      message: 'Too many failed attempts locked until',
      lockUntil: ipRecord.lockUntil,
      attempts: ipRecord.attempts
    }, { status: 403 });
  }

  const user = await User.findOne({ email: email.toLowerCase() });
  const validPassword = user ? await bcrypt.compare(password, user.passwordHash) : false;

  if (!user || !validPassword) {
    // Increment IP attempts
    ipRecord.attempts += 1;
    ipRecord.lockUntil = ipRecord.attempts >= MAX_ATTEMPTS ? new Date(Date.now() + LOCK_TIME) : ipRecord.lockUntil;
    await ipRecord.save();

    return NextResponse.json({
      message: ipRecord.lockUntil 
        ? `Locked due to ${MAX_ATTEMPTS} failed attempts` 
        : 'Invalid credentials',
      attempts: ipRecord.attempts,
      lockUntil: ipRecord.lockUntil || null
    }, { status: 401 });
  }

  // Successful login: reset IP attempts
  await IPAttempt.deleteOne({ ip }); // delete record completely

  // New IP verification for user account
  if (!user.verifiedIPs.includes(ip)) {
    const token = jwt.sign({ id: user._id, ip }, process.env.JWT_SECRET, { expiresIn: '15m' });
    await sendIPVerificationEmail(token, ip);

    return NextResponse.json({
      message: 'New device detected. Verification email sent.',
      newIP: true
    }, { status: 403 });
  }

  // Successful login
  const sessionToken = jwt.sign({ id: user._id, email: user.email, ip }, process.env.JWT_SECRET, { expiresIn: '30d' });
  const res = NextResponse.json({ message: 'Login successful' });
  res.cookies.set({
    name: 'token',
    value: sessionToken,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60
  });

  return res;
}