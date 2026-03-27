import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">

      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          MyBlog
        </h1>

        <NavLink
          to="/"
          className={({ isActive }) => 
            `font-medium transition ${
              isActive 
                ? "text-blue-600 border-b-2 border-blue-600 pb-1" 
                : "text-gray-700 hover:text-blue-500"
            }`
          }
        >
          Blogs
        </NavLink>

      </div>

    </nav>
  );
};

export default Navbar;