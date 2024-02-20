import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export function StarRating(props: { numberOfStar: number }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function clickHandler(currentIndex: number) {
    console.log(currentIndex);
    setRating(currentIndex);
  }
  function mouseEnterHandler(currentIndex: number) {
    console.log(currentIndex);
    setHover(currentIndex);
  }
  function mouseLeaveHandler() {
    console.log(rating);
    setHover(rating);
  }

  return (
    <div>
      {[...Array(props.numberOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={50}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => clickHandler(index)}
            onMouseEnter={() => {
              mouseEnterHandler(index);
            }}
            onMouseLeave={() => {
              mouseLeaveHandler();
            }}
          />
        );
      })}
    </div>
  );
}
