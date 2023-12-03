import React from 'react';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import CallToAction from '../components/CallToAction';
import Trusted from '../components/Trusted';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Nav/>
      {/* <HeroSection /> */}
      <Hero/>
      <Features />
      <Testimonial/> 
      <Trusted/>
      <PricingCard/>
      <CallToAction/>

      <Footer/>

    </>
  );
};

export default Home;
