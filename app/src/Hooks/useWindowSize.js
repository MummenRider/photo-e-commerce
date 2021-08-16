//This hook is inspired from the blog called useHooks.
//For more info and more hooks, go to https://usehooks.com/useWindowSize/
import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }
  useEffect(() => {
    //Adding debounce value of 1s to prevent the component from re-rendering right away.
    const handleResizeDebounce = debounce(
      () =>
        setWindowSize({
          height: window.innerHeight,
          width: window.innerWidth,
        }),
      1000
    );

    window.addEventListener("resize", handleResizeDebounce);

    //To update and get the initial window size
    handleResizeDebounce();
    return () => window.removeEventListener("resize", handleResizeDebounce);
  }, []);

  return windowSize;
}
