import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Certifications from '../components/Certifications';
import About from '../components/About';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="dark min-h-screen bg-[#141414] text-white">
      <Header />
      <Hero />
      <Programs />
      <Certifications />
      <About />
      <Footer />
    </div>
  );
}
