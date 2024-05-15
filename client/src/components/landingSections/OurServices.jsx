import React from "react";
import { MdAppSettingsAlt } from "react-icons/md";
import { TbShoppingCartCog } from "react-icons/tb";
import { images } from "../../assets";
import { motion, useScroll, useTransform } from "framer-motion";

const OurServices = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const imgMove = useTransform(scrollYProgress, [0, 1], ["-80%", "200%"]);
  const startMove = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
  return (
    <>
      <div className="w-full flex flex-col gap-10 md:gap-16 items-center justify-center mt-16 sm:mt-28 md:mt-32 relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <motion.img
          style={{ x: imgMove }}
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-35%] sm:left-[-20%] md:left-[-25%] top-0 size-[35vh] lg:size-[50vh] transform rotate-[270deg]"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-35%] sm:right-[-18%] top-[80%] sm:top-[85%] lg:top-[70%] size-[30vh] lg:size-[35vh]"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-50px] sm:right-[0px] top-[5%] md:top-[20%]  size-[25vh] lg:size-[40vh]"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-50px] sm:right-[0px] top-[5%] md:top-[20%] size-[25vh] lg:size-[40vh] opacity-40"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute right-[20%] sm:right-[30%] lg:right-[50%] top-[50%] size-[25vh] sm:size-[35vh] lg:size-[45vh]"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[20%] sm:right-[30%] lg:right-[50%] top-[50%] size-[25vh] sm:size-[35vh] lg:size-[45vh] opacity-50"
        />
        <img
          src={images?.net}
          alt="net"
          className="z-[-2] absolute right-[15%] top-[30%] w-[50vw] h-[50vh] opacity-40"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.ring}
          alt=""
          className="z-[-2] absolute right-[-60%] sm:right-[-40%] md:right-[-25%] top-[25%] size-[30vh] lg:size-[45vh] transform rotate-[90deg]"
        />
        <motion.img
          style={{ x: startMove }}
          src={images?.star}
          alt=""
          className="z-[-2] absolute left-[-8%] top-[40%] size-[3vw]"
        />
        <img
          src={images?.arrowCurve}
          alt=""
          className="z-[-2] absolute left-[-7%] top-[95%] md:top-[90%] lg:top-[85%] size-[10vh] sm:size-[15vw]"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-[90%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[20vh] w-[45vw] md:w-[35vw] top-0 xl:top-[5%] absolute opacity-60"
          />
          <p className="text-[#925FFF] font-semibold text-xs sm:text-sm md:text-md lg:text-lg 2xl:text-xl">
            Our Services
          </p>
          <h1 className="text-[22px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[60px] 2xl:text-[70px] font-bold leading-[120%]">
            Elevating Your Enterprise with Cutting-Edge Solutions
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-4 lg:gap-6">
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <img
                src={images?.web}
                alt="ai"
                className="size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"
              />
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <MdAppSettingsAlt className="size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px]" />
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Mobile App <span>Development</span>
              </p>
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <img
                src={images?.ai}
                alt="ai"
                className="size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"
              />
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                ML & AI
              </p>
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <img
                src={images?.cloud}
                alt="cloud"
                className="size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"
              />
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Cloud Solution
              </p>
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <img
                src={images?.bi}
                alt="bi"
                className="size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"
              />
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                BI Solution
              </p>
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <TbShoppingCartCog className="size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px]" />
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                E-Commerce
              </p>
            </div>
            <p className="text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
