import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { images } from "../assets";
import BlogCard from "./BlogCard";

const BlogDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="h-auto w-full flex flex-col items-center text-center gap-8 mt-[60px] xl:mt-[80px]">
      <div className="flex flex-col items-center gap-6 sm:gap-4 xl:gap-8 min-h-[50vh]">
        <h1 className="font-bold text-[25px] sm:text-[30px] lg:text-[40px] xl:text-[50px]">
          What's New In Tech 2024
        </h1>
        <img
          src={images?.blog}
          alt="blog"
          className="w-full h-[40vh] lg:h-[50vh] rounded"
        />
        <p className="text-[15px] xl:text-[20px] text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          exercitationem fugit modi beatae dolor, soluta facere voluptatum.
          Nisi, inventore possimus? In non ipsa commodi quos aspernatur
          blanditiis dolores inventore atque? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. <br />
          Asperiores beatae facilis officiis dolor reprehenderit minus eligendi
          quisquam aperiam odio delectus totam esse consequatur modi, aliquid
          dolorem voluptatem eveniet cupiditate! Beatae!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-[100px]">
        <h1 className="font-bold text-[30px] md:text-[40px]">Related Blogs </h1>
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogDetails;
