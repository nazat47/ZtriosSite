import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../assets";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
    const navigate = useNavigate();
  return (
    <>
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
            <SwiperSlide className="p-2 mt-6 xl:mt-12 mb-12 xl:px-4 cursor-pointer" key={i}>
              <div
                onClick={() => navigate(`/blog/${1}`)}
                className="w-full h-[200px] lg:min-h-[270px] flex flex-col lg:gap-2 xl:gap-3 items-center justify-start text-left rounded-xl sm:p-3 lg:p-4 shadow-custom bg-white"
              >
                <img
                  src={images?.blog}
                  alt="blog"
                  className="w-full h-[60%] rounded-lg"
                />
                <p className="w-full font-bold sm:text-[14px] md:text-[15px] lg:text-xl leading-5 mt-3 sm:mt-1 md:mt-2 lg:mt-3 lg:leading-[50%]">
                  What's new in tech 2024
                </p>
                <p className=" text-[10px] md:text-xs lg:text-sm xl:text-[15px] line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat eligendi debitis quo iste nesciunt cum facilis aperiam
                  deserunt corporis voluptates, modi quas, eaque, nobis nam
                  earum praesentium recusandae ratione totam.
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
              <div
                onClick={() => navigate(`/blog/${1}`)}
                className="w-[80%] h-[280px] mx-auto flex flex-col gap-2 items-center justify-start text-left rounded-xl p-3 shadow-custom bg-white"
              >
                <img
                  src={images?.blog}
                  alt="blog"
                  className="w-full h-[60%] rounded-lg"
                />
                <p className="w-full font-bold mt-3 text-[20px]">
                  What's new in tech 2024
                </p>
                <p className="text-sm line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat eligendi debitis quo iste nesciunt cum facilis aperiam
                  deserunt corporis voluptates, modi quas, eaque, nobis nam
                  earum praesentium recusandae ratione totam.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BlogCard;
