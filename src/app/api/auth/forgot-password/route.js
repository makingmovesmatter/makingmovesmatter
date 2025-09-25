import { NextResponse } from "next/server";
import User from "../../../../../models/user";
import IPAttempt from "../../../../../models/ipAttempt";
import { connectDB } from "../../../../../lib/db";
import crypto from "crypto";
import { sendResetEmail } from "../../../../../lib/resetEmail";

const MAX_ATTEMPTS = 5;
const LOCK_TIME = 60 * 60 * 1000; // 1 hour

export async function POST(req) {
  await connectDB();
  const { email } = await req.json();
  const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown";

  if (!email) 
    return NextResponse.json({ message: "Email required" }, { status: 400 });

  // Fetch or create IP record
  let ipRecord = await IPAttempt.findOne({ ip });
  if (!ipRecord) {
    ipRecord = new IPAttempt({ ip });
  } else {
    // Reset if lock expired
    if (ipRecord.lockUntil && Date.now() > ipRecord.lockUntil.getTime()) {
      await IPAttempt.deleteOne({ ip });
      ipRecord = new IPAttempt({ ip });
    }
  }

  // Check if IP is locked
  if (ipRecord.lockUntil && Date.now() < ipRecord.lockUntil.getTime()) {
    return NextResponse.json({
      message: "Too many attempts. Try later.",
      lockUntil: ipRecord.lockUntil,
      attempts: ipRecord.attempts,
    }, { status: 403 });
  }

  // Find user
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    // Increment attempts even if email not found
    ipRecord.attempts += 1;
    if (ipRecord.attempts >= MAX_ATTEMPTS) {
      ipRecord.lockUntil = new Date(Date.now() + LOCK_TIME);
    }
    await ipRecord.save();
    return NextResponse.json({
      message: ipRecord.lockUntil 
        ? `Locked due to ${MAX_ATTEMPTS} failed attempts` 
        : "Email not found",
      attempts: ipRecord.attempts,
      lockUntil: ipRecord.lockUntil || null
    }, { status: 401 });
  }

  // Generate secure reset token
  const token = crypto.randomBytes(32).toString("hex");
  user.resetPasswordToken = token;
  user.resetPasswordExpires = new Date(Date.now() + 30 * 60 * 1000); // 30 min validity
  await user.save();

  await sendResetEmail(token);

  // Reset IP attempts after successful request
  ipRecord.attempts = 0;
  ipRecord.lockUntil = null;
  await ipRecord.save();

  return NextResponse.json({ message: "Reset link sent to your email" });
}
