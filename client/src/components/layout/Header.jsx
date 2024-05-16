import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { images } from "../../assets";
import { navbarLinks } from "../../utils/links";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <div className="h-[50px] md:h-[60px] lg:h-[75px] w-full bg-white rounded-lg p-2 lg:p-3 my-4 sm:my-8 border border-gray-300 shadow-lg">
        <div className="h-full w-full flex items-center justify-between gap-2">
          <img
            src={images.logo}
            alt="Logo"
            className="w-[20%] sm:w-[15%] md:w-[15%] md:h-[60%] lg:w-[20%] lg:h-[70%] lg:ml-4 xl:w-[15%]"
          />
          <div className="hidden sm:flex gap-4 lg:gap-6 items-center justify-center font-semibold text-xs md:text-[12px] lg:text-[14px] xl:text-lg cursor-pointer">
            {navbarLinks?.map((link, i) => (
              <Link
                key={i}
                to={link.url}
                className={`${
                  pathname.toLowerCase() === link.url
                    ? "text-[#7850F2]"
                    : "text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button className="hidden sm:block font-semibold w-[15%] h-[100%] bg-black text-center rounded text-white text-xs md:text-sm lg:text-[md] hover:bg-purple-900">
            Contact us
          </button>
          <CgMenuRight
            size={20}
            onClick={(e) => setOpen(true) || e.stopPropagation()}
            className="cursor-pointer sm:hidden"
          />
        </div>
      </div>
      {/*--- Mobile nav ---*/}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000042] z-[5] transition-transform duration-300 transform  ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          ref={ref}
          className={`absolute top-0 right-0 h-full w-[60vw] bg-white z-[9] p-4 transition-transform duration-700 transform  ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full w-full p-4">
            <MdClose
              size={25}
              className="absolute top-0 left-0 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <div className="flex flex-col gap-4 items-center justify-center font-semibold text-xl cursor-pointer mt-12">
              {navbarLinks?.map((link, i) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={i}
                  to={link.url}
                  className={`${
                    pathname === link?.name ? "text-[#7850F2]" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
