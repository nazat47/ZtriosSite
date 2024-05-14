import React from "react";
import { images } from "../../assets";
import { motion, useScroll, useTransform } from "framer-motion";

const Blueprint = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const imgMove = useTransform(scrollYProgress, [0, 1], ["-200%", "200%"]);
  return (
    <>
      <div className="w-full flex flex-col gap-16 items-center justify-center mt-[70px] sm:mt-[100px] md:mt-[150px] 2xl:mt-[200px] relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <motion.img
          style={{ x: imgMove }}
          src={images?.blueCircleMedium}
          alt="circle"
          className="z-[-2] absolute size-[20vh] sm:size-[22vw] top-[-5%] md:top-0 left-[-10%] md:left-[-25%] opacity-50"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.accentMedium}
          alt="circle"
          className="z-[-2] size-[25vh] md:size-[20vw] top-[5%] md:top-[15%] left-[40%] md:right-[-20%] absolute opacity-20"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.accentMedium}
          alt="circle"
          className="z-[-2] size-[25vh] md:size-[20vw] top-[80%] md:top-[100%] right-[-25%] absolute opacity-60"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-full xl:w-[85%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[30vh] w-[46vw] top-[0] sm:top-[5%] absolute opacity-50"
          />
          <p className="text-[#925fffa2] font-semibold text-xs sm:text-sm md:text-md xl:text-xl">
            Our Working Procedure
          </p>
          <h1 className="text-2xl sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-bold leading-[120%]">
            The Ztrios Blueprint
          </h1>
          <p className="text-[#7950f2de] text-lg sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-bold relative">
            Crafting Success, One Step at a Time
            <img
              src={images?.arrowStraight}
              alt="circle"
              className="top-[85%] right-[-8%] absolute w-[80px] h-[15px] sm:h-[20px] sm:w-[15vw] sm:mt-2 xl:mt-4"
            />
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 2xl:gap-6 mt-8 sm:mt-10 xl:mt-14 relative">
            <motion.img
              style={{ x: imgMove }}
              src={images?.purpleCircleMedium}
              alt="circle"
              className="z-[-2] top-[40%] md:top-[50%] left-[30%] md:left-[10%] absolute opacity-40 size-[30vh] md:size-[350px]"
            />
            <div className="h-[350px] sm:h-[400px] rounded-lg p-4 bg-black text-white shadow-xl">
              <p className="flex flex-col text-lg md:text-xl items-start leading-[140%] md:leading-[100%] lg:leading-[140%]">
                Discover{" "}
                <span className="font-bold text-3xl md:text-[30px]">
                  Potential
                </span>
              </p>
              <img
                src={images?.iceberg}
                alt="iceberg"
                className="h-[60%] w-full my-2"
              />
              <p className="font-semibold text-xs sm:text-sm md:text-xs xl:text-sm">
                Understanding your goals, uncovering opportunities
              </p>
            </div>
            <div className="h-[350px] sm:h-[400px] rounded-lg bg-black text-white relative shadow-xl">
              <img
                src={images?.designBrilliance}
                alt="design"
                className="h-full w-full"
              />
              <p className="text1_gradient absolute top-6 ml-4 text-3xl sm:text-4xl md:text-[2.5vw] font-bold text-left leading-[40px] md:leading-[30px] lg:leading-[40px]">
                Design Brilliance
              </p>
              <p className="absolute bottom-2 font-black text-black text-sm sm:text-lg md:text-sm lg:text-md">
                Crafting tailored solutions that shine
              </p>
            </div>
            <div className="h-[350px] sm:h-[400px] rounded-lg p-4 bg-black text-white shadow-xl">
              <p className="text2_gradient flex flex-col text-2xl sm:text-3xl md:text-[2.5vw] items-start font-bold leading-[30px] md:leading-[25px] lg:leading-[30px] mt-4">
                Refine to Perfection
              </p>
              <p className="text-gray-300 text-[10px] sm:text-xs my-2">
                Meticulous testing for flawless implementation
              </p>
              <img
                src={images?.refine}
                alt="refine"
                className="h-[60%] w-full my-2"
              />
            </div>
            <div className="h-[350px] sm:h-[400px] rounded-lg p-4 bg-white shadow-xl">
              <p className="flex flex-col text-[2.5vw] items-start font-bold leading-[30px] mt-4">
                Unlock Growth
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center mt-[80px] sm:mt-[120px] relative">
        <motion.img
          style={{ x: imgMove }}
          src={images?.purpleCircleMedium}
          alt="circle"
          className="z-[-2] size-[20vw] top-[70%] left-[-400px] absolute opacity-40"
        />
        <div className="text-center">
          <p className="text-[#925fffd9] font-semibold text-xs md:text-md xl:text-xl">
            Our Partners
          </p>
          <h1 className="text-[25px] sm:text-[30px] md:text-[45px] lg:text-[50px] xl:text-[60px] 2xl:text-[60px] font-bold">
            Brands That Believe in Ztrios
          </h1>
        </div>
        <img src={images?.clients} alt="clients" />
      </div>
    </>
  );
};

export default Blueprint;
