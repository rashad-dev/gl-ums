import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const Star = ({ rating , maxStars = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }, (_, i) => {
        const starNumber = i + 1;
        if (starNumber <= rating) {
          return <FaStar key={i} className="text-yellow-400 w-5 h-5" />;
        } else if (starNumber - 0.5 <= rating) {
          return <FaStarHalfAlt key={i} className="text-yellow-400 w-5 h-5" />;
        } else {
          return <FaRegStar key={i} className="text-gray-300 w-5 h-5" />;
        }
      })}
    </div>
  );
};


