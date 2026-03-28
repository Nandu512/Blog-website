import React from "react";

const BlogCard = ({ blog, onReadMore }) => {
  return (
    <div
      onClick={() => onReadMore(blog.id)}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {blog.title}
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          {blog.description}
        </p>

        <div className="text-xs text-gray-500 mb-4 flex justify-between">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <button
          onClick={() => onReadMore(blog.id)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 mt-auto group-hover:bg-blue-600 group-hover:shadow-md"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;