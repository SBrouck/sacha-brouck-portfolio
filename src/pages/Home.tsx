import React from 'react';
import Hero from '@/components/Hero';
import OpenSource from '@/components/OpenSource';
import ContributionGraph from '@/components/ContributionGraph';

const Home = () => {
  return (
    <>
      <Hero />
      <OpenSource />
      <ContributionGraph />
    </>
  );
};

export default Home;
