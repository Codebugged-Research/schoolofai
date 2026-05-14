import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="bebas text-4xl font-bold text-white mb-4 tracking-wider">
              KIDLIN
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed font-light">
              Practical AI education for everyone. Learn to use AI before the world forces you to.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@kidlin.com"
                className="w-10 h-10 bg-[#1a1a1a] hover:bg-[#c5ff00]/10 border border-gray-800 hover:border-[#c5ff00] flex items-center justify-center transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#c5ff00] transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] hover:bg-[#c5ff00]/10 border border-gray-800 hover:border-[#c5ff00] flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#c5ff00] transition-colors duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1a1a1a] hover:bg-[#c5ff00]/10 border border-gray-800 hover:border-[#c5ff00] flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-[#c5ff00] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-400 hover:text-[#c5ff00] transition-colors duration-200 text-sm font-light"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('certifications')}
                  className="text-gray-400 hover:text-[#c5ff00] transition-colors duration-200 text-sm font-light"
                >
                  Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#c5ff00] transition-colors duration-200 text-sm font-light"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm font-light">contact@kidlin.com</li>
              <li className="text-gray-400 text-sm font-light">Support available 24/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm font-light">
              © {currentYear} KIDLIN. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#c5ff00] text-sm transition-colors duration-200 font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c5ff00] text-sm transition-colors duration-200 font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
