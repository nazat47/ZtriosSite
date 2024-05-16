import React from "react";
import { images } from "../../assets";
import { motion, useScroll, useTransform } from "framer-motion";
import BlogCard from "../BlogCard";

const Blogs = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const imgMove = useTransform(scrollYProgress, [0, 1], ["-400%", "200%"]);
  return (
    <div className="flex w-full flex-col items-center justify-center mt-[90px] sm:mt-[120px] relative">
      <motion.img
        style={{ x: imgMove }}
        src={images?.accentSolid}
        alt="circle"
        className="z-[-2] size-[14vw] top-[17%] sm:top-[15%] md:top-[10%] left-0 absolute opacity-50"
      />
      <motion.img
        style={{ x: imgMove }}
        src={images?.purpleCircleSolid}
        alt="circle"
        className="z-[-2] size-[12vw] top-[60%] right-[50%] absolute opacity-50"
      />
      <motion.img
        style={{ x: imgMove }}
        src={images?.blueCircleSolid}
        alt="circle"
        className="z-[-2] size-[20vw] top-[10%] sm:top-0 right-[30%] sm:right-[20%] absolute opacity-70"
      />
      <motion.img
        style={{ x: imgMove }}
        src={images?.blueCircleSolid}
        alt="circle"
        className="z-[-2] size-[20vw] top-[70%] sm:top-[50%] left-[-50%] sm:left-[-60%] absolute opacity-90"
      />

      <div className="flex flex-col items-center justify-center text-center w-full md:w-[85%]">
        <img
          src={images?.net}
          alt="net"
          className="z-[-2] absolute h-[12vh] sm:h-[18vh] lg:h-[25vh] w-[80vw] sm:w-[70vw] top-[-5%] sm:top-[-5%] brightness-0 lg:brightness-75 xl:brightness-100 opacity-80"
        />
        <p className="text-[#925fffc5] font-semibold text-xs sm:text-md lg:text-xl">
          Our blogs
        </p>
        <h1 className="text-[35px] md:text-[45px] xl:text-[50px] 2xl:text-[60px] font-bold leading-[120%]">
          Blogs
        </h1>
      </div>
      <BlogCard />
    </div>
  );
};

export default Blogs;
