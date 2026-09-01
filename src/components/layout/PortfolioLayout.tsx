import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArtBand from '@/components/layout/ArtBand';

const PortfolioLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="portfolio-document">
      <ArtBand variant="margin" position="left" />
      <ArtBand variant="margin" position="right" />
      <Header />
      <main className="portfolio-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioLayout;
