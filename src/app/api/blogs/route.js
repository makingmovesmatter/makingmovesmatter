
import { v4 as uuidv4 } from "uuid";
import { connectDB } from "../../../../lib/db";
import Blog from "../../../../models/blog";

export async function POST(req) {
  try {
    await connectDB()
    const body = await req.json();

    const blog = await Blog.create({
      ...body,
      blog_id: uuidv4(),
      blog_slug: body.blog_title.toLowerCase().replace(/ /g, "-"),
    });

    return Response.json(blog, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ created_at: -1 });
    return Response.json(blogs);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
