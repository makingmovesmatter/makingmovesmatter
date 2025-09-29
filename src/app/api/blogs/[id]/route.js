import { connectDB } from "../../../../../lib/db";
import Blog from "../../../../../models/blog";
import { NextResponse } from "next/server";


export async function PUT(req, { params }) {
  await connectDB();
  const { id } = params;
  const body = await req.json();

  try {
    const updated = await Blog.findOneAndUpdate(
      { blog_id: id },
      { ...body, updated_at: Date.now() },
      { new: true }
    );
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    await Blog.findOneAndDelete({ blog_id: params.id });
    return Response.json({ message: "Blog deleted" });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
