import React from "react";
import "./RandomContent.css";

const RandomContent = ({ numberToDisplay }) => {
  return (
    <div className="random-content">
      <h1>{numberToDisplay}</h1>
    </div>
  );
};

export default RandomContent;
