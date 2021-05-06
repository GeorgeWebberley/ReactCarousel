import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Title from "./components/Title";

function App() {
  // Can load carousel content here, perhaps from external API or other source
  // For demo, I will use dummy data (array of objects)
  const items = [
    {
      title: "title 1",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
      title: "title 2",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
      title: "title 3",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
      title: "title 4",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
      title: "title 5",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
      title: "title 6",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
    {
      title: "title 7",
      text:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
    },
  ];

  return (
    <div className="container">
      <Carousel items={items} />
      <Title />
    </div>
  );
}
export default App;
