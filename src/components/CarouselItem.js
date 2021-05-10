import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({ content, direction, width }) => {
  const translateDistance = {};

  return <div className={`item-container ${direction}`}>{content}</div>;
};

export default CarouselItem;
