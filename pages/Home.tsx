import React from 'react';
import Hero from '../components/Hero';
import HubMosaic from '../components/HubMosaic';
import Philosophy from '../components/Philosophy';

const Home: React.FC = () => {
  return (
    <main>
        <Hero />
        <HubMosaic />
        <Philosophy />
    </main>
  );
};

export default Home;