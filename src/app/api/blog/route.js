import { connectDB } from "../../../../lib/db";
import Blog from "../../../../models/blog";
import { htmlToText } from "html-to-text";

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({ created_at: -1 });

    const formattedBlogs = blogs.map((blog) => {
      // Convert HTML to plain text
      const text = blog.blog_content
        ? htmlToText(blog.blog_content, {
            wordwrap: false,
            selectors: [
              { selector: "*", format: "text" }, // Convert everything to plain text
            ],
          }).replace(/\s+/g, " ").trim() // remove extra spaces/newlines
        : "No description";

      // Take first ~150 chars for snippet
      const snippet = text.length > 150 ? text.slice(0, 150) + "..." : text;

      return {
        title: blog.blog_title,
        slug: blog.blog_slug,
        description: snippet,
        published_at: blog.published_at || blog.created_at,
      };
    });

    return new Response(JSON.stringify(formattedBlogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
