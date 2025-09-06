import { memo } from 'react';

// Higher-order component for memoization with deep comparison for specific props
export function memoizeComponent<T>(
  Component: React.ComponentType<T>,
  propsAreEqual?: (prevProps: Readonly<T>, nextProps: Readonly<T>) => boolean
) {
  return memo(Component, propsAreEqual);
}

// Default comparison function for common use cases
export const defaultPropsComparison = <T extends Record<string, unknown>>(
  prevProps: Readonly<T>,
  nextProps: Readonly<T>
) => {
  const keys = Object.keys(prevProps) as Array<keyof T>;
  
  for (const key of keys) {
    if (prevProps[key] !== nextProps[key]) {
      // Special handling for arrays and objects
      if (Array.isArray(prevProps[key]) && Array.isArray(nextProps[key])) {
        if (JSON.stringify(prevProps[key]) !== JSON.stringify(nextProps[key])) {
          return false;
        }
      } else if (
        typeof prevProps[key] === 'object' &&
        typeof nextProps[key] === 'object' &&
        prevProps[key] !== null &&
        nextProps[key] !== null
      ) {
        if (JSON.stringify(prevProps[key]) !== JSON.stringify(nextProps[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  
  return true;
};

// Specific memoization for project cards
export const memoizeProjectCard = <T extends { project: { id: string }; filters: unknown }>(
  Component: React.ComponentType<T>
) => {
  return memo(Component, (prevProps, nextProps) => {
    return (
      prevProps.project.id === nextProps.project.id &&
      JSON.stringify(prevProps.filters) === JSON.stringify(nextProps.filters)
    );
  });
};