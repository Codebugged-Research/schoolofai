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
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1655035080489-521cde5dfc3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdhdnklMjBsaW5lc3xlbnwwfHx8YmxhY2t8MTc3ODc2Njg1OXww&ixlib=rb-4.1.0&q=85"
          alt="Abstract Waves Background"
          className="w-full h-full object-cover opacity-80"
          style={{ filter: 'blur(2px)' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 py-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="bebas text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] tracking-wide uppercase">
              Practical AI Learning
              <br />
              <span className="text-[#c5ff00]">for Everyone</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl leading-relaxed font-light">
              AI programs for school students, college students, professionals, founders, and teams.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button
                onClick={scrollToPrograms}
                size="lg"
                className="w-full sm:w-auto bg-[#c5ff00] hover:bg-[#a8e000] text-black border-0 transition-all duration-300 font-semibold text-base px-8 py-5 h-auto"
              >
                Begin with Free Mastermind
              </Button>
              <div className="flex sm:flex-row flex-col gap-4 sm:gap-6">
                <div className="flex flex-col text-sm">
                  <span className="text-gray-400">Start Date</span>
                  <span className="text-white font-semibold">16 May 2026</span>
                </div>
                <div className="flex flex-col text-sm">
                  <span className="text-gray-400">Start Time</span>
                  <span className="text-white font-semibold">10 AM IST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Kidlin's Law Quote */}
          <div className="hidden lg:flex items-center justify-end">
            <div className="text-right max-w-xs">
              <p className="text-xs text-gray-500 italic leading-relaxed font-light">
                Kidlin's Law
                <br />
                <span className="text-gray-400">
                  "If you write the problem down clearly,
                  <br />
                  then the matter is half solved"
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
