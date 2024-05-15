import React from "react";
import { images } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useScroll, useTransform } from "framer-motion";

const Blogs = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });
  const imgMove = useTransform(scrollYProgress, [0, 1], ["-400%", "200%"]);
  return (
    <div className="flex w-full flex-col gap-2 items-center justify-center mt-[90px] sm:mt-[120px] relative">
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
          className="z-[-2] absolute h-[12vh] sm:h-[15vh] lg:h-[25vh] w-[80vw] sm:w-[70vw] top-[-5%] sm:top-[-5%] brightness-75 md:brightness-100 opacity-80"
        />
        <p className="text-[#925fffc5] font-semibold text-xs sm:text-md lg:text-xl">
          Our blogs
        </p>
        <h1 className="text-[35px] md:text-[45px] xl:text-[50px] 2xl:text-[60px] font-bold leading-[120%]">
          Blogs
        </h1>
      </div>
      <div className="hidden sm:block w-full h-[auto]">
        <Swiper
          slidesPerView={3}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="my-swiper"
        >
          {[...Array(10)].map((_, i) => (
            <SwiperSlide className="p-2 cursor-grab my-12 xl:px-4" key={i}>
              <div className="w-full min-h-[400px] xl:min-h-[500px] mx-auto flex flex-col gap-2 items-center justify-center rounded-xl sm:p-3 lg:p-6 shadow-custom bg-white">
                <p className="text-center w-full font-bold sm:text-sm md:text-xl">
                  What's new in tech 2024
                </p>
                <p className="text-center text-[10px] md:text-xs lg:text-sm xl:text-[15px] mb-6">
                  “I've been using this web hosting service for over a year and
                  I'm really impressed with the uptime and support. The website
                  has never gone down and the customer service is always quick
                  to help with any issues I have. Highly recommend!”
                </p>
                <img
                  src={images?.user}
                  alt="user"
                  className="size-[25px] lg:size-[50px]"
                />
                <p className="leading-[50%]">Jane Smith</p>
                <p className="leading-[50%] sm:text-xs lg:max-xl:text-sm 2xl:text-[15px] text-gray-500">
                  {new Date().toLocaleDateString()}
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
          navigation={true}
          modules={[Navigation]}
        >
          {[...Array(3)].map((_, i) => (
            <SwiperSlide className="p-3 cursor-grab" key={i}>
              <div className="w-[80%] min-h-[300px] mx-auto flex flex-col gap-2 items-center justify-center rounded-xl p-6 shadow-custom bg-white">
                <p className="text-center w-full font-bold sm:text-sm md:text-xl">
                  What's new in tech 2024
                </p>
                <p className="text-center text-[10px] md:text-xs lg:text-sm xl:text-[15px] mb-6">
                  “I've been using this web hosting service for over a year and
                  I'm really impressed with the uptime and support. The website
                  has never gone down and the customer service is always quick
                  to help with any issues I have. Highly recommend!”
                </p>
                <img
                  src={images?.user}
                  alt="user"
                  className="size-[40px] sm:size-[25px] lg:size-[50px]"
                />
                <p className="leading-[70%]">Jane Smith</p>
                <p className="leading-[80%] text-[13px] sm:text-[10px] lg:max-xl:text-sm 2xl:text-[15px] text-gray-500">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
