import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          MyBlog
        </h1>

        <div className="flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `text-lg font-medium px-4 py-2 rounded-lg transition-colors ${
                isActive 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-500"
              }`
            }
          >
            Blogs
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;