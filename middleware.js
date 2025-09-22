import { NextResponse } from "next/server";
import { authenticateAdmin } from "./lib/auth";


export function middleware(req) {
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/admin") && !url.pathname.startsWith("/admin/login")) {
    const token = req.cookies.get("token")?.value;
    const authResult = authenticateAdmin(token, req);

    if (authResult instanceof NextResponse) {
      return authResult;
    }

    return NextResponse.next();
  }

  if (url.pathname === "/admin/login") {
    const token = req.cookies.get("token")?.value;
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } catch {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};