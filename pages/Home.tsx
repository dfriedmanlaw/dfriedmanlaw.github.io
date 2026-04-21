import React from 'react';
import Hero from '../components/Hero';
import HubMosaic from '../components/HubMosaic';
import Philosophy from '../components/Philosophy';
import ClientReviews from '../components/ClientReviews';
import FeaturedResources from '../components/FeaturedResources';

const Home: React.FC = () => {
  return (
    <main>
        <Hero />
        <HubMosaic />
        <FeaturedResources />
        <Philosophy />
        <ClientReviews />
    </main>
  );
};

export default Home;