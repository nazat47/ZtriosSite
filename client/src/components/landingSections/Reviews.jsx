import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Ratings from "../Ratings";
import { images } from "../../assets";
import { motion, useScroll, useTransform } from "framer-motion";

export const Reviews = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const imgMove = useTransform(scrollYProgress, [0, 1], ["-300%", "100%"]);
  return (
    <>
      <div className="w-full flex flex-col xl:gap-4 items-center justify-center mt-[80px] sm:mt-[120px] relative">
        {/* ----background images (gradients,ring, stars etc.)----- */}
        <motion.img
          style={{ x: imgMove }}
          src={images?.accentMedium}
          alt="circle"
          className="z-[-2] size-[35vw] md:size-[17vw] top-[15%] sm:top-[20%] md:top-[20%] left-[30%] sm:left-[20%] md:left-[26%] absolute opacity-50"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.purpleCircleMedium}
          alt="circle"
          className="z-[-2] size-[45vw] md:size-[17vw] top-[60%] right-[0] sm:right-[1%] md:right-[15%] absolute opacity-50"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.blueCircleMedium}
          alt="circle"
          className="z-[-2] size-[40vw] md:size-[20vw] top-[10%] right-[-50%] sm:right-[-40%] md:right-[-20%] absolute opacity-70"
        />
        <motion.img
          style={{ x: imgMove }}
          src={images?.blueCircleMedium}
          alt="circle"
          className="z-[-2] size-[20vh] md:size-[20vw] top-[60%] left-[-5%] md:left-[-10%] absolute opacity-90"
        />
        {/* --------- */}
        <div className="flex flex-col items-center justify-center text-center w-full sm:w-[85%]">
          <img
            src={images?.net}
            alt="net"
            className="z-[-2] absolute h-[20vh] sm:h-[30vh] lg:h-[40vh] w-[100vw] sm:w-[80vw] top-[-10%] sm:top-[-15%] brightness-90 sm:brightness-100 opacity-80"
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
        <div className="hidden sm:block w-full lg:w-[80%] h-[auto]">
          <Swiper
            slidesPerView={3}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="my-swiper"
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide className="p-2 cursor-grab mt-6 md:mt-10 mb-12" key={i}>
                <div className="w-full mx-auto flex flex-col gap-2 items-center justify-center rounded-xl sm:p-3 lg:p-6 backdrop-blur-2xl bg-white/10 shadow-custom backdrop-brightness-95">
                  <p className="text-center text-[10px] md:text-xs lg:text-sm xl:text-[15px]">
                    “I've been using this web hosting service for over a year
                    and I'm really impressed with the uptime and support. The
                    website has never gone down and the customer service is
                    always quick to help with any issues I have. Highly
                    recommend!”
                  </p>
                  <Ratings rating={5} />
                  <img
                    src={images?.user}
                    alt="user"
                    className="size-[30px] lg:size-[60px]"
                  />
                  <p className="leading-[50%]">Jane Smith</p>
                  <p className="leading-[50%] sm:text-xs lg:max-xl:text-sm 2xl:text-[15px] ">
                    Freelance Designer
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="sm:hidden w-full h-[auto] mt-6">
          <Swiper
            style={{
              "--swiper-navigation-color": "#5f1474",
              "--swiper-navigation-size": "25px",
            }}
            navigation={
              ({
                prevEl: ".swiper-button-prev",
              },
              true)
            }
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
