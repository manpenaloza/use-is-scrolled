import { useState, useEffect } from "react";

const getIsScrolled = () => {
  const scrolledFromTop = document.body != undefined ? document.body.scrollTop : 0;
  const scrolledDown = (window.pageYOffset || scrolledFromTop) > 0;
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
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  
  return isScrolled;
};
