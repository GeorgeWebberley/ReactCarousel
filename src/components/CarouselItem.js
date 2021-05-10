import React from "react";
import "./CarouselItem.css";

// Container for the items in the carousel
const CarouselItem = ({ content, direction }) => {

  return <div className={`item-container ${direction}`}>{content}</div>;
};

export default CarouselItem;
