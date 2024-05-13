import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Ratings from "../Ratings";
import { images } from "../../assets";

export const Reviews = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 items-center justify-center mt-[80px] sm:mt-[120px] relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.accentMedium}
          alt="circle"
          className="z-[-2] size-[17vw] top-[20%] left-[26%] absolute opacity-50"
        />
        <img
          src={images?.purpleCircleMedium}
          alt="circle"
          className="z-[-2] size-[17vw] top-[60%] right-[25%] absolute opacity-50"
        />
        <img
          src={images?.blueCircleMedium}
          alt="circle"
          className="z-[-2] size-[20vw] top-[10%] right-[-20%] absolute opacity-70"
        />
        <img
          src={images?.blueCircleMedium}
          alt="circle"
          className="z-[-2] size-[20vw] top-[60%] left-[-22%] absolute opacity-90"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-full sm:w-[85%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[22vh] w-[60vw] top-[-5%] absolute opacity-40"
          />
          <p className="text-[#925fffc5] font-semibold text-xs sm:text-md lg:text-xl">
            Our Partners
          </p>
          <h1 className="text-[25px] sm:text-[30px] md:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold leading-[120%]">
            Trusted Voices:
          </h1>
          <h1 className="text-[25px] sm:text-[30px] md:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold leading-[120%] sm:leading-[60px]">
            Witness the Ztrios Impact
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 2xl:gap-8 mt-8 md:mt-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-[450px] flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95"
            >
              <p className="text-center lg:max-xl:text-sm">
                “I've been using this web hosting service for over a year and
                I'm really impressed with the uptime and support. The website
                has never gone down and the customer service is always quick to
                help with any issues I have. Highly recommend!”
              </p>
              <Ratings rating={5} />
              <img src={images?.user} alt="user" />
              <p>Jane Smith</p>
              <p className="leading-[50%]">Freelance Designer</p>
            </div>
          ))}
        </div>
        <div className="sm:hidden w-full h-[auto] mt-6">
          <Swiper
            navigation={true}
            modules={[Navigation]}
          >
            {[...Array(3)].map((_, i) => (
              <SwiperSlide className="p-3 cursor-grab" key={i}>
                <div className="w-[80%] mx-auto flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95">
                  <p className="text-center">
                    “I've been using this web hosting service for over a year
                    and I'm really impressed with the uptime and support. The
                    website has never gone down and the customer service is
                    always quick to help with any issues I have. Highly
                    recommend!”
                  </p>
                  <Ratings rating={5} />
                  <img src={images?.user} alt="user" />
                  <p>Jane Smith</p>
                  <p className="leading-[50%]">Freelance Designer</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="hidden sm:flex w-full flex-col gap-4 items-center justify-center mt-[120px] relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <img
          src={images?.accentSolid}
          alt="circle"
          className="z-[-2] size-[14vw] top-[20%] left-[27%] absolute opacity-50"
        />
        <img
          src={images?.purpleCircleSolid}
          alt="circle"
          className="z-[-2] size-[12vw] top-[60%] right-[30%] absolute opacity-50"
        />
        <img
          src={images?.blueCircleSolid}
          alt="circle"
          className="z-[-2] size-[15vw] top-[10vh] right-[-5vw] absolute opacity-70"
        />
        <img
          src={images?.blueCircleSolid}
          alt="circle"
          className="z-[-2] size-[20vw] top-[40%] left-[-10%] absolute opacity-90"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-[85%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] h-[22vh] w-[60vw] top-[-5%] absolute opacity-40"
          />
          <p className="text-[#925fffc7] font-semibold text-md lgtext-xl">
            Our Partners
          </p>
          <h1 className="text-[30px] md:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold leading-[120%]">
            Trusted Voices:
          </h1>
          <h1 className="text-[30px] md:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold leading-[60px]">
            Witness the Ztrios Impact
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 2xl:gap-8 mt-8 md:mt-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-[450px] flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95"
            >
              <p className="text-center lg:max-xl:text-sm">
                “I've been using this web hosting service for over a year and
                I'm really impressed with the uptime and support. The website
                has never gone down and the customer service is always quick to
                help with any issues I have. Highly recommend!”
              </p>
              <Ratings rating={5} />
              <img src={images?.user} alt="user" />
              <p>Jane Smith</p>
              <p className="leading-[50%]">Freelance Designer</p>
            </div>
          ))}
        </div>
        <div className="sm:hidden w-full h-[auto] mt-6">
          <Swiper
            navigation={true}
            modules={[Navigation]}
          >
            {[...Array(3)].map((_, i) => (
              <SwiperSlide className="p-3 cursor-grab" key={i}>
                <div className="w-[80%] mx-auto flex flex-col gap-2 items-center justify-center rounded-xl p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95">
                  <p className="text-center">
                    “I've been using this web hosting service for over a year
                    and I'm really impressed with the uptime and support. The
                    website has never gone down and the customer service is
                    always quick to help with any issues I have. Highly
                    recommend!”
                  </p>
                  <Ratings rating={5} />
                  <img src={images?.user} alt="user" />
                  <p>Jane Smith</p>
                  <p className="leading-[50%]">Freelance Designer</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
