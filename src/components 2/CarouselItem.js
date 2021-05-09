import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({ content, direction }) => {
  return <div className={`item-container`}>{content}</div>;
};

export default CarouselItem;
