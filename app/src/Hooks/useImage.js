import { useState, useEffect } from "react";

export const useImage = (src) => {
  const [loaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => setIsLoaded(true);
  }, [src]);

  return { loaded };
};
