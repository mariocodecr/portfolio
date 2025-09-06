"use client";

import { createContext, useContext, useEffect, useState } from 'react';

interface PerformanceContextType {
  shouldReduceMotion: boolean;
  isSlowDevice: boolean;
  connectionType: string;
}

const PerformanceContext = createContext<PerformanceContextType>({
  shouldReduceMotion: false,
  isSlowDevice: false,
  connectionType: 'unknown'
});

export const usePerformance = () => useContext(PerformanceContext);

interface PerformanceProviderProps {
  children: React.ReactNode;
}

export function PerformanceProvider({ children }: PerformanceProviderProps) {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [isSlowDevice, setIsSlowDevice] = useState(false);
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Detect slow devices
    if ('hardwareConcurrency' in navigator) {
      // Devices with 2 or fewer cores are considered slow
      setIsSlowDevice(navigator.hardwareConcurrency <= 2);
    }

    // Check memory (if available)
    if ('deviceMemory' in navigator) {
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      if (memory && memory <= 2) { // 2GB or less
        setIsSlowDevice(true);
      }
    }

    // Check connection type
    if ('connection' in navigator) {
      const conn = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
      if (conn) {
        setConnectionType(conn.effectiveType || 'unknown');
        
        // If connection is slow, reduce animations
        if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') {
          setShouldReduceMotion(true);
        }
      }
    }

    // Performance observer for long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Long task threshold
            setIsSlowDevice(true);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch {
        // Long task API not supported
      }
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <PerformanceContext.Provider value={{
      shouldReduceMotion,
      isSlowDevice,
      connectionType
    }}>
      {children}
    </PerformanceContext.Provider>
  );
}