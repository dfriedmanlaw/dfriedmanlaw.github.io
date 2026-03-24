import React from 'react';
import Hero from '../components/Hero';
import HubMosaic from '../components/HubMosaic';
import Philosophy from '../components/Philosophy';
import ClientReviews from '../components/ClientReviews';

const Home: React.FC = () => {
  return (
    <main>
        <Hero />
        <HubMosaic />
        <Philosophy />
        <ClientReviews />
    </main>
  );
};

export default Home;