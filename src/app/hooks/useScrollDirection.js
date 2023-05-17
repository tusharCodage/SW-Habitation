import constate from 'constate'
import { useEffect, useState } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
      let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      setScroll(window.scrollY > 10);
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);
  return {
    scrollDirection,

    scroll
    
  };
};