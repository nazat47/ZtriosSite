import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { routeUrl } from "../utils/links";
import CardSkeleton from "./skeletons/CardSkeleton";
import BlogCards from "./BlogCards";

const AllBlogs = () => {
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

  return (
    <>{isLoading ? <CardSkeleton /> : <BlogCards allBlogs={allBlogs} />}</>
  );
};

export default AllBlogs;
