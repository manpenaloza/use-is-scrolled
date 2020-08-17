import { useState, useEffect } from "react";

const getIsScrolled = () => {
  const scrolledFromTop =
    typeof window !== "undefined" && document.body != undefined
      ? document.body.scrollTop
      : 0;
  const scrolledDown =
    typeof window !== "undefined" &&
    (window.pageYOffset || scrolledFromTop) > 0;
  return scrolledDown;
};

// exported hook
// @return boolen
export default () => {
  const [isScrolled, setIsScrolled] = useState(getIsScrolled);

  useEffect(() => {
    const onScroll = () => {
      const newIsScrolled = getIsScrolled();
      setIsScrolled(newIsScrolled);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return isScrolled;
};
