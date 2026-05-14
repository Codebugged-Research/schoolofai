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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxkaWdpdGFsJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzc4NzY2MDA1fDA&ixlib=rb-4.1.0&q=85"
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
      </div>

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
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
            AI programs for school students, college students, professionals, founders, and teams.
          </p>

          {/* CTA Button */}
          <div className="flex items-center gap-6 mb-16">
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl border-t border-gray-700 pt-8">
            <div>
              <div className="bebas text-4xl md:text-5xl text-white mb-1">10+</div>
              <div className="text-sm text-gray-400">Hours Training</div>
            </div>
            <div className="border-l border-gray-700 pl-8">
              <div className="bebas text-4xl md:text-5xl text-white mb-1">Small</div>
              <div className="text-sm text-gray-400">Batch Sizes</div>
            </div>
            <div className="border-l border-gray-700 pl-8">
              <div className="bebas text-4xl md:text-5xl text-white mb-1">4.9/5</div>
              <div className="text-sm text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
