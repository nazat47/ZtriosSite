import React from "react";
import { images } from "../../assets";

const OurServices = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-10 md:gap-16 items-center justify-center mt-16 sm:mt-28 md:mt-32 relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute left-[-25%] top-[10%] size-[30vw] transform rotate-[270deg]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[-18%] top-[60%] size-[25vw]"
        />
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute right-[0px] top-[10%] size-[20vw]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[0px] top-[10%] size-[20vw] opacity-40"
        />
        <img
          src={images?.blueCircleGrad}
          alt=""
          className="z-[-2] absolute right-[35%] top-[70%] size-[25vw]"
        />
        <img
          src={images?.purpleCircleGrad}
          alt=""
          className="z-[-2] absolute right-[35%] top-[70%] size-[25vw] opacity-20"
        />
        <img
          src={images?.net}
          alt="net"
          className="z-[-2] absolute right-[15%] top-[30%] w-[50vw] h-[50vh] opacity-30"
        />
        <img
          src={images?.ring}
          alt=""
          className="z-[-2] absolute right-[-25%] top-[25%] size-[25vw] transform rotate-[90deg]"
        />
        <img
          src={images?.star}
          alt=""
          className="z-[-2] absolute left-[-8%] top-[40%] size-[3vw]"
        />
        <img
          src={images?.arrowCurve}
          alt=""
          className="z-[-2] absolute left-[-7%] top-[85%] size-[15vw]"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-[90%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[20vh] w-[35vw] top-[5%] absolute opacity-60"
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
              <div className="bg-[#00FFAE] size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"></div>
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-[11px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <div className="bg-[#00FFAE] size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"></div>
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-[11px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <div className="bg-[#00FFAE] size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"></div>
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-[11px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <div className="bg-[#00FFAE] size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"></div>
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-[11px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <div className="bg-[#00FFAE] size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"></div>
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-[11px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
              In today's rapidly evolving business landscape, standing still is
              the quickest path to obsole scence. At Ztrios, we understand the
              need tounderstand the need to
            </p>
          </div>
          <div className="h-[208px] border-[2px] border-gray-300 rounded-xl p-3 sm:p-4 2xl:p-6 backdrop-blur-lg bg-white/10 shadow-custom backdrop-brightness-95">
            <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
              <div className="bg-[#00FFAE] size-[40px] sm:size-[60px] md:size-[40px] lg:size-[60px] rounded"></div>
              <p className="flex flex-col font-bold text-sm sm:text-lg md:text-md lg:text-lg xl:text-xl">
                Web <span>Development</span>
              </p>
            </div>
            <p className="text-[11px] sm:text-[12px] md:text-[10px] lg:text-[12px] xl:text-sm text-gray-500 mt-2">
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
