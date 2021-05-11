import React from "react";
import "./CarouselItem.css";
import styled, { keyframes } from "styled-components";

// Create a CSS-in-JS element so we can insert the width value into the CSS and keyframes
const StyledDiv = styled.div`
  animation: ${(props) => slide(props.translateValue)} 0.8s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slide = (value) => {
  return keyframes`
  0% {
    transform: translateX(${value}px);
  }
  100% {
    transform: translateX(0);
  }
`;
};

// Container for the items in the carousel
const CarouselItem = ({ content, direction, width }) => {
  const getTranslateValue = () => {
    if (direction === "slide-right") {
      // If slide-right we want to translateX by minus the width
      return -width;
    } else if (direction === "slide-left") {
      // If slide-left we want to translateX by width
      return width;
    } else {
      // Else we don't want to translate
      return 0;
    }
  };

  return <StyledDiv translateValue={getTranslateValue()}>{content}</StyledDiv>;
};

export default CarouselItem;
