import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Ratings = ({ rating }) => {
  return (
    <div className="flex gap-2 my-4">
      {[...Array(5)].map((_, i) =>
        rating > i ? (
          <FaStar className="fill-yellow-400" key={i}/>
        ) : (
          <FaRegStar key={i}/>
        )
      )}
    </div>
  );
};

export default Ratings;
