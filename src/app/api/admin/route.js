import bcrypt from "bcryptjs";
import { connectDB } from "../../../../lib/db";
import User from "../../../../models/user";


function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}


function validatePassword(password) {
  return password.length >= 8;
}

export async function POST(request) {
  try {
    await connectDB();

    const data = await request.json();
    const { email, password, secret, role } = data;

    if (!secret || secret !== process.env.ADMIN_TOKEN) {
      return new Response(
        JSON.stringify({ success: false, message: "Unauthorized access" }),
        { status: 401 }
      );
    }

    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email format" }),
        { status: 400 }
      );
    }

    if (!validatePassword(password)) {
      return new Response(
        JSON.stringify({ success: false, message: "Password must be at least 8 characters" }),
        { status: 400 }
      );
    }

    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      return new Response(
        JSON.stringify({ success: false, message: "Admin already exists" }),
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newAdmin = new User({
      email,
      passwordHash,
      role: role || "admin",
      failedAttempts: 0,
      lockUntil: null,
      ipAttempts: {},
      verifiedIPs: [],
    });

    await newAdmin.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Admin created successfully",
        adminId: newAdmin._id,
      }),
      { status: 201 }
    );

  } catch (error) {
    console.error("Admin creation error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error.message || "Internal server error",
      }),
      { status: 500 }
    );
  }
}