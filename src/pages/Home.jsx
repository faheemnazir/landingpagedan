import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import Compare from '../components/Compare';
import Services from '../components/Services';
import RevenueImpact from '../components/RevenueImpact';
import Pricing from '../components/Pricing';
import TrustedBrands from '../components/TrustedBrands';
import Portfolio from '../components/Portfolio';
import TechStack from '../components/TechStack';
import Challenges from '../components/Challenges';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Challenges />
      {/* <Stats /> */}
      <WhyChooseUs />
      <Compare />
      <Services />
      <RevenueImpact />
      <Pricing />
      <TrustedBrands />
      <Portfolio />
      <TechStack />
      <Process />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
  );
};

export default Home;
