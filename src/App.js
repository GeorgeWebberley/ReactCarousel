import React, { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Settings from "./components/Settings";
import RandomContent from "./components/RandomContent";
import Title from "./components/Title";

function App() {
  const [numberOfItems, setNumberOfItems] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const content = [];

  // Carousel must take an ARRAY of components or HTML. For demo, I will use dummy data (array of 'RandomContent' components)
  // But it is possible to load an array of any HTML or custom components.
  for (let i = 0; i < numberOfItems; i++) {
    content.push(<RandomContent key={i} numberToDisplay={i + 1} />);
  }

  return (
    <div className="container">
      {/* <div className="padding"> */}
      <Carousel items={content} itemsPerPage={itemsPerPage} />
      {/* </div> */}
      <Title />
      <Settings
        updateItemsPerPage={setItemsPerPage}
        updateNumberItems={setNumberOfItems}
        numberOfItems={numberOfItems}
      />
    </div>
  );
}
export default App;
