import { NextResponse } from "next/server";
import User from "../../../models/user";
import { connectDB } from "../../../lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();
  const { token, newPassword } = await req.json();

  if (!token || !newPassword) return NextResponse.json({ message: "Invalid request" }, { status: 400 });

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() }, // token not expired
  });

  if (!user) return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });

  user.passwordHash = await bcrypt.hash(newPassword, 10);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  return NextResponse.json({ message: "Password updated successfully" });
}