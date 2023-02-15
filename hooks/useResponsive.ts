import { useEffect, useState } from 'react';

import { sizes } from 'theme';

const useResponsive = () => {
  const [windowWidth, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowWidth);
    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    };
  }, []);

  const isLaptop = windowWidth <= sizes.laptop;
  const isTablet = windowWidth <= sizes.tablet;
  const isPhone = windowWidth <= sizes.phone;

  return {
    isLaptop,
    isTablet,
    isPhone,
  };
};

export default useResponsive;
