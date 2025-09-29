import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

export default function AdminDashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value; // Read token from HttpOnly cookie

  if (!token) {
    return <div>Unauthorized: Please login</div>;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    // You can use decoded info if needed: decoded.email
    return <div>Welcome, Admin!</div>;
  } catch (err) {
    return <div>Unauthorized: Invalid token</div>;
  }
}