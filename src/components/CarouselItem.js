import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({itemNumber}) => {
    return (
        <div className='item-container'>
            <h1>{itemNumber}</h1>
        </div>
    );
}

export default CarouselItem;
