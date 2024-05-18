import { useCallback, useEffect, useState } from 'react';

export const useCustomLazy = <T>(
  items: T[],
  startCount: number,
  incrementCount: number,
): T[] => {
  const [postCount, setPostCount] = useState(startCount);

  const handleScroll = useCallback(() => {
    const documentReact = document.documentElement.getBoundingClientRect();
    if (documentReact.bottom < document.documentElement.clientHeight + 100) {
      setPostCount(prevState => prevState + incrementCount);
    }
  }, [incrementCount]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return items.slice(0, postCount);
};
