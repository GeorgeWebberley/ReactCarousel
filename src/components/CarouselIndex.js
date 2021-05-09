import React from "react";
import "./CarouselIndex.css";

// Small circles that keep track of the current index for the user
const CarouselIndex = ({
  numberOfPages,
  currentIndex,
  setIndex,
  setDirection,
}) => {
  const circles = [];

  // Helper function that sets the index at the same time as calculating the direction to animate the slide
  const setDirectionIndex = (newIndex) => {
    if (newIndex > currentIndex) {
      setDirection("slide-left");
    } else if (newIndex < currentIndex) {
      setDirection("slide-right");
    } else {
      setDirection("");
    }
    setIndex(newIndex);
  };

  // Create a virtual dom element for each circle
  for (let i = 0; i < numberOfPages; i++) {
    circles.push(
      <div
        className={`circle ${currentIndex == i ? "active" : ""}`}
        key={i}
        onClick={() => setDirectionIndex(i)}
      ></div>
    );
  }

  return <div className="index-container">{circles}</div>;
};

export default CarouselIndex;
