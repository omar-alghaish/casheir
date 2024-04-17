import React, { useEffect, useState } from 'react'

const useVisibility = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible =
          prevScrollPos > currentScrollPos || currentScrollPos < 10;
  
        setVisible(isVisible);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [prevScrollPos]);
  
    return visible;
}

export default useVisibility
