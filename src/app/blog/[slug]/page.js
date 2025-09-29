import BlogContent from "./BlogContent";

async function getBlog(slug) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/blog/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

// SEO Metadata
export async function generateMetadata({ params }) {
  const slug = params?.slug; // ❌ NO await

  if (!slug) {
    return { title: "Blog Not Found", description: "Blog not found" };
  }

  const blog = await getBlog(slug);

  const cleanDescription = blog?.blog_content
    ? blog.blog_content.replace(/<[^>]+>/g, "").slice(0, 160)
    : "";

  return {
    title: blog?.blog_title ? `${blog.blog_title} | MesaMovingExperts.com` : "Blog Not Found",
    description: cleanDescription,
    openGraph: {
      title: blog?.blog_title || "Blog Not Found",
      description: cleanDescription,
      url: blog?.blog_slug
        ? `https://mesamovingexperts.com/blog/${blog.blog_slug}`
        : undefined,
      images: blog?.blog_banner? [{ url: blog.blog_banner }] : [],
    },
  };
}

// Server Component
export default async function BlogView({ params }) {
  const slug = params?.slug; // ❌ NO await

  if (!slug) return <p className="text-center mt-20">Blog not found</p>;

  const blog = await getBlog(slug);

  if (!blog) return <p className="text-center mt-20">Blog not found</p>;

  return <BlogContent blog={blog} />;
}
