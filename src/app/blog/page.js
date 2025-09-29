"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Link from "next/link";

const Blog = () => {
  const headerImg = "/images/blogBanner.png";
  const headerText1 = "Watch";
  const headerText2 = "Our Blog";
  const headerDesc =
    "Understand how Making Moves Matter provides safe, reliable, stress-free moving services.";

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  const stripHTML = (html) => {
    if (!html) return "No description";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "No description";
  };

  // Function to generate pagination range
  const getPaginationRange = () => {
    const delta = 1;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* Main Content */}
      <main className="!py-12 container">
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-[var(--accent-color)]/20 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-transparent border-t-[var(--accent-color)] rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Blogs Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We're working on creating amazing content for you. Check back soon!
            </p>
          </div>
        )}

        {/* Blogs Grid */}
        {!loading && blogs.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {currentBlogs.map((blog) => (
                <article
                  key={blog.blog_id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden flex flex-col transform hover:-translate-y-2"
                >
                  <Link href={`/blog/${blog.blog_slug}`} className="block overflow-hidden">
                    <img
                      src={blog.blog_banner}
                      alt={blog.blog_title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-[var(--accent-color)] bg-[var(--accent-color)]/10 px-3 py-1 rounded-full">
                        {new Date(blog.published_at || blog.created_at).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </span>
                    </div>

                    <Link href={`/blog/${blog.blog_slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--accent-color)] transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                        {blog.blog_title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 line-clamp-3 mb-4 flex-1 leading-relaxed">
                      {stripHTML(blog.blog_content)}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        href={`/blog/${blog.blog_slug}`}
                        className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:text-[var(--accent-color)]/80 font-semibold transition-colors group/readmore"
                      >
                        Read More
                        <svg 
                          className="w-4 h-4 transform group-hover/readmore:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Enhanced Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 flex-wrap">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                {/* Page Numbers */}
                {getPaginationRange().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                    disabled={page === '...'}
                    className={`min-w-[48px] px-4 py-3 rounded-xl border font-medium transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-[var(--accent-color)] text-white border-[var(--accent-color)] shadow-lg shadow-[var(--accent-color)]/20'
                        : page === '...'
                        ? 'border-transparent text-gray-500 cursor-default'
                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Blog;