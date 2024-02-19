import React from "react";
import { FaStar } from "react-icons/fa";

export function StarRating(props: { numberOfStar: number }) {
  return (
    <div>
      {[...Array(props.numberOfStar)].map((_, index) => {
        return <FaStar key={index} size={50} />;
      })}
    </div>
  );
}
