import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { scrollToSection } from '@/lib/scroll';

interface PortfolioNavigationContextValue {
  activeDossierId: string | null;
  openDossier: (id: string) => void;
  clearDossier: () => void;
}

const PortfolioNavigationContext = createContext<PortfolioNavigationContextValue | null>(null);

export const PortfolioNavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeDossierId, setActiveDossierId] = useState<string | null>(null);

  const openDossier = useCallback((id: string) => {
    setActiveDossierId(id);
    scrollToSection('work');
  }, []);

  const clearDossier = useCallback(() => {
    setActiveDossierId(null);
  }, []);

  const value = useMemo(
    () => ({ activeDossierId, openDossier, clearDossier }),
    [activeDossierId, openDossier, clearDossier]
  );

  return (
    <PortfolioNavigationContext.Provider value={value}>{children}</PortfolioNavigationContext.Provider>
  );
};

export const usePortfolioNavigation = () => {
  const context = useContext(PortfolioNavigationContext);
  if (!context) {
    throw new Error('usePortfolioNavigation must be used within PortfolioNavigationProvider');
  }
  return context;
};
