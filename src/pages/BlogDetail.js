import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="p-6 text-center">Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">

        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded mb-4"
        />

        <div className="text-gray-500 text-sm mb-4">
          <p>By {blog.author}</p>
          <p>{blog.date}</p>
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>

      </div>

    </div>
  );
};

export default BlogDetail;