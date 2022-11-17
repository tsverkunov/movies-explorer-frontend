import { useEffect, useState } from 'react';
import {
  FULL_SIZE,
  FULL_SIZE_COUNT,
  LAPTOP,
  LAPTOP_COUNT,
  MOBILE_COUNT,
  TABLET,
  TABLET_COUNT
} from '../constants/config';

const useResize = () => {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (width >= FULL_SIZE) {
      setCount(FULL_SIZE_COUNT);
    } else if (FULL_SIZE > width && width > LAPTOP) {
      setCount(LAPTOP_COUNT);
    } else if (LAPTOP >= width && width > TABLET) {
      setCount(TABLET_COUNT);
    } else {
      setCount(MOBILE_COUNT);
    }
  }, [width]);

  function handleResize() {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 1000);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return { count, width, setCount };
};

export default useResize;
