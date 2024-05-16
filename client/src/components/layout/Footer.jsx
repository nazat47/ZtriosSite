import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { navbarLinks } from "../../utils/links";
import { images } from "../../assets";

const Footer = () => {
  return (
    <div className="w-full lg:w-[95%] xl:w-[80%] flex items-start justify-between mx-auto mt-[200px] p-6 ">
      <div className="flex flex-col gap-4">
        <img src={images?.logo} alt="logo" className="w-[10vw]" />
        <div className="flex gap-3 text-sm xl:text-md">
          <MdEmail className="fill-purple-600" />
          <p>help@hrybix.com</p>
        </div>
        <div className="flex gap-3  text-sm xl:text-md">
          <FaPhoneAlt className="fill-purple-600" />
          <p>+1 234 456 678 89</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-xs md:text-sm xl:text-lg">
        <p className="text-[20px] lg:text-[30px] 2xl:text-[40px] mb-2">Links</p>
        {navbarLinks?.map((link, i) => (
          <Link to={link.url} key={i}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-4 text-xs md:text-sm xl:text-lg">
        <p className="text-[20px] lg:text-[30px] 2xl:text-[40px] mb-2">Legal</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
      <div className="flex flex-col gap-4 text-xs md:text-sm xl:text-lg">
        <p className="text-[20px] lg:text-[30px] 2xl:text-[40px] mb-2">Product</p>
        <p>Take Tour</p>
        <p>Live Chat</p>
        <p>Reviews</p>
      </div>
      <div className="flex flex-col gap-4 text-xs md:text-smb-2m xl:text-lg">
        <p className="text-[20px] lg:text-[30px] 2xl:text-[40px] mb-2">Newsletter</p>
        <p>Stay Up To Date</p>
      </div>
    </div>
  );
};

export default Footer;
