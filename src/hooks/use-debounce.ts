import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Hook for debounced callback
export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  return (...args: Parameters<T>) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      callback(...args);
    }, delay);

    setDebounceTimer(timer);
  };
}

// Hook for throttling
export function useThrottle<T>(value: T, limit: number): T {
  const [inThrottle, setInThrottle] = useState(false);
  const [lastValue, setLastValue] = useState<T>(value);

  useEffect(() => {
    if (!inThrottle) {
      setLastValue(value);
      setInThrottle(true);
      
      setTimeout(() => setInThrottle(false), limit);
    }
  }, [value, inThrottle, limit]);

  return lastValue;
}