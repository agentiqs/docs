import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Benefits from './Benefits';
import Examples from './Examples';
import Pricing from './Pricing';
import Footer from './Footer';
import Navigation from './Navigation';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <Examples />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
