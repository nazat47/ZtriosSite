import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { images } from "../assets";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="w-[100vw] min-h-screen mx-auto overflow-x-hidden px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[120px] 2xl:px-[170px]">
      <Header active={5} />
      <div className="h-auto w-full flex flex-col items-center text-center gap-8 mt-[60px] xl:mt-[80px]">
        <div className="flex flex-col items-center gap-8 min-h-[50vh]">
          <h1 className="font-bold text-[40px] xl:text-[50px]">
            What's New In Tech 2024
          </h1>
          <img
            src={images?.blog}
            alt="blog"
            className="w-[80%] h-[50vh] rounded"
          />
          <p className="xl:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            exercitationem fugit modi beatae dolor, soluta facere voluptatum.
            Nisi, inventore possimus? In non ipsa commodi quos aspernatur
            blanditiis dolores inventore atque? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. <br />
            Asperiores beatae facilis officiis dolor reprehenderit minus
            eligendi quisquam aperiam odio delectus totam esse consequatur modi,
            aliquid dolorem voluptatem eveniet cupiditate! Beatae!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-[100px]">
          <h1 className="font-bold text-[30px] md:text-[40px]">
            Related Blogs{" "}
          </h1>
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
                <SwiperSlide
                  className="p-2 my-12 xl:px-4 cursor-pointer"
                  key={i}
                >
                  <div
                    onClick={() => navigate(`/blog/${1}`)}
                    className="w-full h-[200px] lg:min-h-[270px] flex flex-col gap-1 lg:gap-2 xl:gap-3 items-center justify-start rounded-xl sm:p-3 lg:p-4 shadow-custom bg-white"
                  >
                    <img
                      src={images?.blog}
                      alt="blog"
                      className="w-full h-[50%] rounded-lg"
                    />
                    <p className="text-center w-full font-bold sm:text-[14px] md:text-[16px] lg:text-xl leading-5 sm:mt-3 lg:leading-[50%]">
                      What's new in tech 2024
                    </p>
                    <p className="text-center text-[10px] md:text-xs lg:text-sm xl:text-[15px] line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat eligendi debitis quo iste nesciunt cum facilis
                      aperiam deserunt corporis voluptates, modi quas, eaque,
                      nobis nam earum praesentium recusandae ratione totam.
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
                    className="w-[80%] h-[300px] mx-auto flex flex-col gap-2 items-center justify-start rounded-xl p-3 shadow-custom bg-white"
                  >
                    <img
                      src={images?.blog}
                      alt="blog"
                      className="w-full h-[50%] rounded-lg"
                    />
                    <p className="text-center w-full font-bold mt-3 text-[23px]">
                      What's new in tech 2024
                    </p>
                    <p className="text-center text-md line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat eligendi debitis quo iste nesciunt cum facilis
                      aperiam deserunt corporis voluptates, modi quas, eaque,
                      nobis nam earum praesentium recusandae ratione totam.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
