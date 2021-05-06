import React from "react";
import Arrow from "./Arrow";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";

const Carousel = ({ items }) => {
  const itemsPerPage = 3;

  const itemsToDisplay = items.splice();

  console.log("items", items);

  for (var i = 0; i < itemsPerPage; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    // items.push(<CarouselItem key={i} itemNumber={i} />);
  }

  return (
    <div className="carousel-container">
      <div className="back">
        <Arrow />
      </div>
      <div className="forwards">
        <Arrow />
      </div>
    </div>
  );
};

export default Carousel;
