import React from "react";
import Link from "next/link";
import { blogs } from "./blog";

const Section1 = () => {

  const htmlToText = (html) => {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, ""); // remove all HTML tags
};


  return (
    <div className="min-h-screen container mx-auto !py-15 px-5">
      <div className="grid md:grid-cols-2 gap-12">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="blog-card bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
          >
            <div className="relative w-full h-72">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <Link href={`/blog/${blog.slug}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-[var(--accent-color)] transition-colors">
                  {blog.title}
                </h2>
              </Link>
              <div
                className="text-gray-600 mb-3 flex-grow line-clamp-2"
              >{htmlToText(blog.description)}</div>
              <span className="text-sm text-gray-400 mb-3">{blog.date}</span>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-auto inline-block bg-[var(--accent-color)] text-white px-4 py-2 rounded hover:bg-[var(--accent-color)] text-center transition"
              >
                Read Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;