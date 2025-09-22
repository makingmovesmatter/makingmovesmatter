import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET;

export function authenticateAdmin(token, req) {
  if (!token) {
    const res = NextResponse.redirect(new URL("/admin/login", req.url));
    res.cookies.delete("token"); // clear token immediately
    return res;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded; // valid token
  } catch (err) {
    // token invalid or expired → log out immediately
    const res = NextResponse.redirect(new URL("/admin/login", req.url));
    res.cookies.delete("token"); // clear token
    return res;
  }
}
