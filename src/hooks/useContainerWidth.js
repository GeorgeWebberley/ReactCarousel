import { useEffect, useState } from "react";

// A custom hook, allowing to continuously update width of an element upon window resize
export const useContainerWidth = (myRef) => {
  const [width, setWidth] = useState(0); // init state

  // Get the element offsetWidth
  const getWidth = () => myRef.current.offsetWidth;

  useEffect(() => {
    //   Call getWidth every time screen resizes
    const handleResize = () => {
      setWidth(getWidth());
    };

    //   Call getWidth on init
    if (myRef.current) {
      setWidth(getWidth());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return width;
};
