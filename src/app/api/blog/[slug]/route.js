import { NextResponse } from "next/server";
import { connectDB } from "../../../../../lib/db";
import Blog from "../../../../../models/blog";

export async function GET(req) {
  try {
    await connectDB();

    // Extract slug from URL
    const url = new URL(req.url);
    const slug = url.pathname.split("/").pop(); // last part of the URL

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Query by 'blog_slug' field in MongoDB
    const blog = await Blog.findOne({ blog_slug: slug });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}