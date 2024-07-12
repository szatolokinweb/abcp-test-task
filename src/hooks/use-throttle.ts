import { useRef, useCallback } from "react";

const DELAY = 300;

export const useThrottle = (
  callee: VoidFunction,
  deps: unknown[],
  delay: number = DELAY
) => {
  const ref = useRef({
    isFree: true,
  });

  const throttledCallee = useCallback(() => {
    if (ref.current.isFree) {
      ref.current.isFree = false;

      setTimeout(() => {
        ref.current.isFree = true;
      }, delay);

      callee();
    }
  }, deps);

  return throttledCallee;
};
