import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const ref = useRef(false);

  return useCallback((...args: any[]) => {
    if (!ref.current) {
      callback(...args);
      ref.current = true;

      setTimeout(() => {
        ref.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
