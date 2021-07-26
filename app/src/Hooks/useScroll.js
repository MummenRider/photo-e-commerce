import { useState, useEffect } from "react";

function useScroll(initValue) {
  const [isScrolled, setIsScrolled] = useState(initValue);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };
    return () => (window.onscroll = null);
  }, [isScrolled]);

  return { isScrolled };
}

export default useScroll;
