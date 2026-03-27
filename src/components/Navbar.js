import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">

      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          MyBlog
        </h1>

        <Link
          to="/"
          className="text-gray-700 hover:text-blue-500 font-medium"
        >
          Blogs
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;