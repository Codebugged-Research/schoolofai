import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold bebas tracking-wider text-white">
              KIDLIN
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              About
            </button>
            <button
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Log in
            </button>
            <Button
              className="bg-white hover:bg-gray-100 text-black border-0 transition-all duration-300 font-medium"
              onClick={() => scrollToSection('programs')}
            >
              Explore Programs
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800/50">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('programs')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Log in
              </button>
              <Button
                className="bg-white hover:bg-gray-100 text-black border-0 transition-all duration-300 w-full font-medium"
                onClick={() => scrollToSection('programs')}
              >
                Explore Programs
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
