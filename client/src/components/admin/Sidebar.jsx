import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-[200px] shadow-2xl">
      <div className="p-3 flex items-start justify-center">
        <Link
          to={"/dashboard"}
          className="font-semibold text-purple-600 h-[50px] hover:bg-gray-100 rounded w-full flex items-center justify-center hover:text-lg transition-all"
        >
          <p>Blogs</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
