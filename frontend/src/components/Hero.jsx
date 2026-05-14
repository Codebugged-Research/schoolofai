import React from 'react';
import { Button } from './ui/button';

export const Hero = () => {
  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black">
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 py-32 relative z-20">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="bebas text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-wide uppercase">
            Practical AI Learning
            <br />
            <span className="text-[#c5ff00]">for Everyone</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
            AI programs for school students, college students, professionals, founders, and teams.
          </p>

          {/* CTA Button */}
          <div className="flex items-center gap-6">
            <Button
              onClick={scrollToPrograms}
              size="lg"
              className="bg-[#c5ff00] hover:bg-[#a8e000] text-black border-0 transition-all duration-300 font-semibold text-base px-8 py-6 h-auto"
            >
              Begin with Free Mastermind
            </Button>
            <div className="hidden md:flex flex-col text-sm">
              <span className="text-gray-400">Start Date</span>
              <span className="text-white font-semibold">16 May 2026</span>
            </div>
            <div className="hidden md:flex flex-col text-sm">
              <span className="text-gray-400">Start Time</span>
              <span className="text-white font-semibold">10 AM IST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
