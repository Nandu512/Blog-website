import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-gray-600 animate-pulse">Blog not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 animate-gradient-x p-4 md:p-8">

      <div className="max-w-3xl mx-auto mt-4">

        <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {blog.title}
          </h1>

          <div className="flex items-center text-gray-500 text-sm mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <span className="font-medium text-blue-600 mr-2">{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
          </div>

          <div className="overflow-hidden rounded-2xl mb-8 shadow-md opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            {blog.content}
          </div>

        </div>
      </div>

    </div>
  );
};

export default BlogDetail;