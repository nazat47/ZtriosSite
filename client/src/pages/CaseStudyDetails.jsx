import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { baseUrl, routeUrl } from "../utils/links";
import BlogDetailsSkeleton from "../components/skeletons/BlogDetailsSkeleton";

const CaseStudyDetails = () => {
  const { id } = useParams();
  const { data: caseStudyData, isLoading } = useQuery({
    queryKey: ["case-study", { id }],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${routeUrl}/case-study/${id}`);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="h-auto w-full flex flex-col items-center text-center gap-8 mt-[60px] xl:mt-[80px]">
      {isLoading ? (
        <BlogDetailsSkeleton />
      ) : (
        <div className="flex flex-col items-center gap-6 sm:gap-4 xl:gap-8 min-h-[50vh] w-full">
          <h1 className="font-bold text-[25px] sm:text-[30px] lg:text-[40px] xl:text-[50px]">
            {caseStudyData?.title}
          </h1>
          <img
            src={`${baseUrl}/${caseStudyData?.imageUrl}`}
            alt="blog"
            className="w-full h-[40vh] lg:h-[50vh] rounded"
          />
          <ReactQuill
            value={caseStudyData?.text}
            theme="bubble"
            readOnly={true}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default CaseStudyDetails;
