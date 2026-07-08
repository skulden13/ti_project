import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement | null>;
  wrapperRef: MutableRefObject<HTMLElement | null>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
  useEffect(() => {
    if (!callback) {
      return undefined;
    }

    const triggerElement = triggerRef.current;
    const wrapperElement = wrapperRef.current;

    if (!triggerElement || !wrapperElement) {
      return undefined;
    }

    const options: IntersectionObserverInit = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      observer.unobserve(triggerElement);
    };
  }, [callback, triggerRef, wrapperRef]);
}
