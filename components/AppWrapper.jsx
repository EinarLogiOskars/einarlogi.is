'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AppWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        // Triggers transition on route change
      });
    }
  }, [pathname]); // Runs whenever the route changes

  return <>{children}</>;
}
