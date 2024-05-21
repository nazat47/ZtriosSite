import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, routeUrl } from "../utils/links";

const BlogCards = ({ related = false, id }) => {
  const navigate = useNavigate();
  const { data: allBlogs, isLoading } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs`);
        if (related) {
          return data?.filter((blog) => blog._id !== id).slice(0, 3);
        }
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) return <p>Loading blogs...</p>;

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
          {allBlogs?.map((blog, i) => (
            <SwiperSlide
              className="p-2 mt-6 xl:mt-12 mb-12 xl:px-4 cursor-pointer"
              key={i}
            >
              <div
                onClick={() => navigate(`/blog/${blog?._id}`)}
                className="w-full h-[250px] lg:min-h-[350px] flex flex-col gap-1 lg:gap-2 xl:gap-3 items-center justify-start text-left rounded-xl sm:p-3 lg:p-4 shadow-custom bg-white "
              >
                <img
                  src={`${baseUrl}/${blog?.imageUrl}`}
                  alt="blog"
                  className="w-full h-[60%] rounded-lg"
                />
                <p className="w-full font-bold sm:text-[14px] md:text-[17px] lg:text-xl leading-5 mt-3 sm:mt-1 md:mt-2 lg:mt-3 lg:leading-[120%]">
                  {blog?.title}
                </p>
                <p className="line-clamp-2 text-xs md:text-sm">
                  {blog?.subTitle}
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
          {allBlogs?.map((blog, i) => (
            <SwiperSlide className="p-3 cursor-grab" key={i}>
              <div
                onClick={() => navigate(`/blog/${blog?._id}`)}
                className="w-[80%] h-[300px] mx-auto flex flex-col gap-1 items-center justify-start text-left rounded-xl p-3 shadow-custom bg-white"
              >
                <img
                  src={`${baseUrl}/${blog?.imageUrl}`}
                  alt="blog"
                  className="w-full h-[60%] rounded-lg"
                />
                <p className="w-full font-bold mt-3 text-[20px]">
                  {blog?.title}
                </p>
                <p className="line-clamp-2">{blog?.subTitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BlogCards;
