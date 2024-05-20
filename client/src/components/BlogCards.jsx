import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, routeUrl } from "../utils/links";

const BlogCards = () => {
  const navigate = useNavigate();
  const { data: allBlogs, isLoading } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs`);
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
                className="w-full h-[200px] lg:min-h-[270px] flex flex-col lg:gap-2 xl:gap-3 items-center justify-start text-left rounded-xl sm:p-3 lg:p-4 shadow-custom bg-white "
              >
                <img
                  src={`${baseUrl}/${blog?.imageUrl}`}
                  alt="blog"
                  className="w-full h-[60%] rounded-lg"
                />
                <p className="w-full font-bold sm:text-[14px] md:text-[15px] lg:text-xl leading-5 mt-3 sm:mt-1 md:mt-2 lg:mt-3 lg:leading-[50%]">
                  {blog?.title}
                </p>
                <ReactQuill
                  value={blog?.text.substr(0,50)}
                  theme="bubble"
                  readOnly={true}
                  className="w-full"
                />
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
                className="w-[80%] h-[280px] mx-auto flex flex-col gap-2 items-center justify-start text-left rounded-xl p-3 shadow-custom bg-white"
              >
                <img
                  src={`${baseUrl}/${blog?.imageUrl}`}
                  alt="blog"
                  className="w-full h-[60%] rounded-lg"
                />
                <p className="w-full font-bold mt-3 text-[20px]">
                  {blog?.title}
                </p>
                <p className="text-sm line-clamp-2">{blog?.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BlogCards;
