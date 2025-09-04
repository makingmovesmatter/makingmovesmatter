import { blogs } from "../blog";

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | MesaMovingExperts.com",
      description: "The requested blog post was not found on Mesa Moving Experts.",
    };
  }

  const blogUrl = `https://mesamovingexperts.com/blog/${blog.slug}`;
  const cleanDescription = blog.description.replace(/<[^>]+>/g, "").slice(0, 160);

  return {
    title: `${blog.title} | MesaMovingExperts.com`,
    description: cleanDescription,
    metadataBase: new URL("https://mesamovingexperts.com"),
    alternates: {
      canonical: `/blog/${blog.slug}/`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: `${blog.title} | MesaMovingExperts.com`,
      description: cleanDescription,
      url: blogUrl,
      siteName: "Mesa Moving Experts",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: new Date(blog.date).toISOString(),
      modifiedTime: new Date().toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | MesaMovingExperts.com`,
      description: cleanDescription,
      images: [blog.image],
      creator: "@MesaMoving",
    },
    icons: {
      icon: [
        { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
        { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "icon",
          url: "/images/logo.png",
          sizes: "270x270",
          type: "image/png",
        },
      ],
    },
    keywords: [
      "moving services",
      "professional movers",
      "local movers",
      "long distance movers",
      "residential movers",
      "commercial movers",
      "dependable movers",
      "affordable moving services",
    ],
    authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
    category: "Moving Services",
  };
}

// Blog page content
export default function BlogView({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <p className="text-center mt-20">Blog not found</p>;

  return (
    <div className="min-h-screen container !py-15">
      <h1 className="text-4xl font-bold mb-5">{blog.title}</h1>
      <span className="text-sm text-gray-400 mb-5 block">{blog.date}</span>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[600px] object-cover mb-5 rounded"
      />
      <div
        className="text-gray-700 text-lg space-y-4"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></div>
    </div>
  );
}
