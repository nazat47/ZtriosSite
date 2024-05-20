import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BlogCards from "./BlogCards";
import axios from "axios";
import { baseUrl, routeUrl } from "../utils/links";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogData, isLoading } = useQuery({
    queryKey: ["blog", { id }],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/blogs/${id}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) return <p>Loading blogs...</p>;

  return (
    <div className="h-auto w-full flex flex-col items-center text-center gap-8 mt-[60px] xl:mt-[80px]">
      <div className="flex flex-col items-center gap-6 sm:gap-4 xl:gap-8 min-h-[50vh] w-full">
        <h1 className="font-bold text-[25px] sm:text-[30px] lg:text-[40px] xl:text-[50px]">
          {blogData?.title}
        </h1>
        <img
          src={`${baseUrl}/${blogData?.imageUrl}`}
          alt="blog"
          className="w-full h-[40vh] lg:h-[50vh] rounded"
        />
        <ReactQuill
          value={blogData?.text}
          theme="bubble"
          readOnly={true}
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-[100px]">
        <h1 className="font-bold text-[30px] md:text-[40px]">Related Blogs </h1>
        <BlogCards related={true} id={blogData?._id} />
      </div>
    </div>
  );
};

export default BlogDetails;
