import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Strategy from '../components/Strategy';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Strategy />
      <Portfolio />
      <Contact />
    </>
  );
};

export default HomePage;
