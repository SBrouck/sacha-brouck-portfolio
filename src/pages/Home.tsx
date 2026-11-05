import React from 'react';
import Hero from '@/components/Hero';
import OpenSource from '@/components/OpenSource';
import ContributionGraph from '@/components/ContributionGraph';
import HomeActions from '@/components/HomeActions';

const Home = () => {
  return (
    <>
      <Hero />
      <OpenSource />
      <ContributionGraph />
      <HomeActions />
    </>
  );
};

export default Home;
