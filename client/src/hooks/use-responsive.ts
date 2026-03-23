import { useEffect, useState } from 'react';

/**
 * Hook to detect mobile device
 * Returns true if window width is less than 768px (md breakpoint)
 */
export function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        setIsMobile(true);
        setIsTablet(false);
        setScreenSize('sm');
      } else if (width < 768) {
        setIsMobile(true);
        setIsTablet(false);
        setScreenSize('md');
      } else if (width < 1024) {
        setIsMobile(false);
        setIsTablet(true);
        setScreenSize('lg');
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setScreenSize('xl');
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet, screenSize };
}
