import React from "react";
import { images } from "../assets";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { navbarLinks } from "../utils/links";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-[80%] flex items-start justify-between mx-auto mt-[120px] p-6 ">
      <div className="flex flex-col gap-4">
        <img src={images?.logo} alt="logo" className="mt-3" />
        <div className="flex gap-3">
          <MdEmail className="fill-purple-600" />
          <p>help@hrybix.com</p>
        </div>
        <div className="flex gap-3">
          <FaPhoneAlt className="fill-purple-600" />
          <p>+1 234 456 678 89</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[40px]">Links</p>
        {navbarLinks?.map((link, i) => (
          <Link to={link.url} key={i}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[40px]">Legal</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[40px]">Product</p>
        <p>Take Tour</p>
        <p>Live Chat</p>
        <p>Reviews</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[40px]">Newsletter</p>
        <p>Stay Up To Date</p>
      </div>
    </div>
  );
};

export default Footer;
