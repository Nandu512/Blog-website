import React, { useState } from "react";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-6xl mx-auto px-4 py-8">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Latest Blogs
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-8 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onReadMore={handleReadMore}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No blogs found
            </p>
          )}
        </div>

      </div>

    </div>
  );
};

export default Home;