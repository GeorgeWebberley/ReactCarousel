import React, { useEffect, useRef, useState } from "react";
import { useContainerWidth } from "../hooks/useContainerWidth";
import Arrow from "./Arrow";
import "./Carousel.css";
import CarouselIndex from "./CarouselIndex";
import CarouselItem from "./CarouselItem";

const Carousel = ({ items, itemsPerPage }) => {
  // States
  const [swipeStart, setSwipeStart] = useState(0);
  const [swipeEnd, setSwipeEnd] = useState(0); // for swipe gestures.
  const [currentIndex, setCurrentIndex] = useState(0); // Keeps track of the 'page' in the carousel.
  const [currentDirection, setCurrentDirection] = useState(""); // Stores state of the direction the carousel moves in.
  const [oldItemsSide, setOldItemsSide] = useState(""); // Stores state of the side that the old carousel items should move to (left or right).
  const [prevItems, setPrevItems] = useState([]); // Stores state of the side that the old carousel items should move to.

  // Get the width of the carousel
  const ref = useRef(null);
  const carouselWidth = useContainerWidth(ref);

  let currentItemsDOM = []; // An array that will hold the virtual dom elements to be rendered
  let oldItemsDOM = []; // An array that will hold the virtual dom elements to be rendered

  // Get a 'subarray' of 3 items. Starts at 0-3 then next page will be 3-6 etc.
  let currentItems = items.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const updateCarousel = () => {
    // Create a virtual dom element for each of the items in the subarray
    currentItems.forEach((item) => {
      currentItemsDOM.push(
        <CarouselItem
          key={item.key}
          content={item}
          direction={currentDirection}
          width={carouselWidth}
        />
      );
    });

    prevItems.forEach((item) => {
      oldItemsDOM.push(
        <CarouselItem
          key={item.key}
          content={item}
          direction={currentDirection}
          width={carouselWidth}
        />
      );
    });
  };

  // Updates the index (the current position of the carousel). Value will either be +1 or -1
  const changeIndex = (value) => {
    // Store the previous items in state so that they can be accessed for the 'leaving' animation
    setPrevItems(currentItems);

    // Calculate new value
    let newValue = currentIndex + value;
    // If we have gone too far back, we want to loop and start at the end
    if (newValue < 0) {
      setCurrentIndex(Math.ceil(items.length / itemsPerPage) - 1);
    } else if (newValue > Math.ceil(items.length / itemsPerPage) - 1) {
      // Likewise, if we have gone too forwards, we reset the index to 0
      setCurrentIndex(0);
    } else {
      // Else we simple set the index to the new value
      setCurrentIndex(newValue);
    }
  };

  // Sets the direction of the transition as well as the side that the previous items should be on
  const setDirection = (direction) => {
    if (direction === "slide-right") {
      setOldItemsSide("right");
    } else if (direction === "slide-left") {
      setOldItemsSide("left");
    } else {
      setOldItemsSide("");
    }
    setCurrentDirection(direction);
  };

  // -----------For Mobile Swipe Gestures------------
  const handleSwipeStart = (e) => {
    setSwipeStart(e.targetTouches[0].clientX);
  };

  const handleSwipeMove = (e) => {
    setSwipeEnd(e.targetTouches[0].clientX);
  };

  const handleSwipeEnd = () => {
    if (swipeStart - swipeEnd > 100) {
      setDirection("slide-left");
      changeIndex(1);
    }
    if (swipeStart - swipeEnd < -100) {
      setDirection("slide-right");
      changeIndex(-1);
    }
  };
  // ---------------------------------

  // Initialise the carousel
  updateCarousel();

  return (
    <div
      ref={ref}
      className="carousel-container"
      onTouchStart={(touchStartEvent) => handleSwipeStart(touchStartEvent)}
      onTouchMove={(touchMoveEvent) => handleSwipeMove(touchMoveEvent)}
      onTouchEnd={() => handleSwipeEnd()}
    >
      <div
        onClick={() => {
          setDirection("slide-right");
          changeIndex(-1);
        }}
        className="back"
      >
        <Arrow />
      </div>
      <div
        onClick={() => {
          setDirection("slide-left");
          changeIndex(1);
        }}
        className="forwards"
      >
        <Arrow />
      </div>
      <div className={`old-view ${oldItemsSide}`}>{oldItemsDOM}</div>
      <div className="current-view"> {currentItemsDOM}</div>

      <div className="items-index">
        <CarouselIndex
          currentIndex={currentIndex}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          setIndex={setCurrentIndex}
          setDirection={setDirection}
        />
      </div>
    </div>
  );
};

export default Carousel;
