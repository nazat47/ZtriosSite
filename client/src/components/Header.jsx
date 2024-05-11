import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";
import { navbarLinks } from "../utils/links";

const Header = ({ active }) => {
  return (
    <div className="h-[75px] w-full bg-white rounded-lg p-3 my-8 border border-gray-300 shadow-lg">
      <div className="h-full w-full flex items-center justify-between">
        <img src={images.logo} alt="Logo" className="w-[174px] h-[39px] ml-4" />
        <div className="flex gap-6 items-center justify-center font-semibold text-xl cursor-pointer">
          {navbarLinks?.map((link, i) => (
            <Link
              to={link.url}
              className={`${active === i ? "text-[#7850F2]" : "text-black"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button className="font-semibold w-[180px] h-[60px] bg-black text-center rounded-xl text-white ">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Header;
