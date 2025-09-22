import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "../../../../../lib/db";
import User from "../../../../../models/user";


export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { message: "Token not provided" },
      { status: 400 }
    );
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const { id, ip } = payload;

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    if (!user.verifiedIPs.includes(ip)) {
      user.verifiedIPs.push(ip);
      await user.save();
    }

    return NextResponse.json(
      { message: "IP verified successfully" },
      { status: 200 }
    );

  } catch (err) {
    console.error("IP verification error:", err);
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 400 }
    );
  }
}
