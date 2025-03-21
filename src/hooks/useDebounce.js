import { useCallback, useRef } from 'react';


export const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);
  
  const cacheRef = useRef(new Map());
  
  const debouncedCallback = useCallback((value) => {
    if (cacheRef.current.has(value)) {
      callback(value);
      return;
    }
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(value);
      cacheRef.current.set(value, true);
      
      if (cacheRef.current.size > 100) {
        const firstKey = cacheRef.current.keys().next().value;
        cacheRef.current.delete(firstKey);
      }
    }, delay);
  }, [callback, delay]);
  
  return debouncedCallback;
};