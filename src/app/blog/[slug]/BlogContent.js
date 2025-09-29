"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Quote from "@/app/components/quote";

export default function BlogContent({ blog }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Blog Content */}
          <article className="flex-1">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {blog.blog_title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {blog.read_time || "5 min read"}
                </span>
              </div>

              {blog.categories && (
                <div className="flex flex-wrap gap-2">
                  {blog.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-[var(--accent-color)] text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={blog.blog_banner}
                alt={blog.blog_title}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="eager"
              />
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none
              prose-headings:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-em:text-gray-600
              prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2
              prose-ul:text-gray-700 prose-ol:text-gray-700
              prose-li:marker:text-blue-500
              prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-table:border-gray-300
              prose-img:rounded-lg prose-img:shadow-md
              prose-hr:border-gray-200"
            >
              <div
                className="text-gray-700 text-base sm:text-lg leading-8 space-y-6"
                dangerouslySetInnerHTML={{ __html: blog.blog_content }}
              />
            </div>

            {/* FAQ Section */}
            {blog.faq && blog.faq.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
                <div className="flex flex-col gap-3">
                  {blog.faq.map((fa, index) => (
                    <div
                      key={index}
                      className="border border-[var(--accent-color)] rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full flex justify-between items-center px-4 py-3 font-medium text-[var(--accent-color)] hover:bg-blue-100 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        {fa.question}
                        {openFaqIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                      </button>
                      {openFaqIndex === index && (
                        <div className="px-4 py-3 text-gray-700 border-t border-blue-100">
                          {fa.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {blog.tags && (
              <footer className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </footer>
            )}

          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-96 flex-shrink-0">
            <div className="sticky top-8 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Submit Your Booking</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Ready to get started? Book your appointment now and let us help you achieve your goals.
                  </p>
                </div>
                <Quote />
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
