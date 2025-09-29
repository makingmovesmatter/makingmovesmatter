"use client";
import BlogForm from "@/app/components/BlogForm";
import { useState, useEffect } from "react";

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  async function fetchBlogs() {
    const res = await fetch("/api/blogs");
    setBlogs(await res.json());
  }

  async function createBlog(blogData) {
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });
    fetchBlogs();
  }

  async function updateBlog(blogData) {
    await fetch(`/api/blogs/${editingBlog.blog_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });
    setEditingBlog(null);
    fetchBlogs();
  }

  async function deleteBlog(id) {
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    fetchBlogs();
  }

  useEffect(() => {
    fetchBlogs();
  }, []);


  function escapeHTML(html) {
    if (!html) return "No description";

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";

  return text.trim() || "No description";
  }


return (
    <div className="p-6 space-y-6 container !my-10 block justify-between lg:flex">


      <div className="mx-auto px-4 py-6 w-full max-w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">All Blogs</h2>
          
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li
                key={blog.blog_id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={blog.blog_banner}
                    alt={blog.blog_title}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 line-clamp-1">{blog.blog_title}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {escapeHTML(blog.blog_content || "No description")}
                    </p>


                    <div className="flex space-x-2 mt-2">
                      <button
                        onClick={() => setEditingBlog(blog)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded-lg transition-colors duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteBlog(blog.blog_id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        Delete
                      </button>
                    </div>

                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>





      <div>
        {editingBlog ? (
          <BlogForm
            onSubmit={updateBlog}
            initialData={editingBlog}
            mode="edit"
          />
        ) : (
          <BlogForm onSubmit={createBlog} mode="create" />
        )}
       </div>



    </div>
  );
}