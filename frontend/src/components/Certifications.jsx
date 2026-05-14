import React from 'react';
import { Card } from './ui/card';
import { Award } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'IBM SkillsBuild',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/E7d58cab3f88684f9f8f_ibm_skillsbuild.svg',
      description: 'Industry-recognized AI & Tech skills',
    },
    {
      id: 2,
      name: 'Cisco Networking Academy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Cisco_Networking_Academy.svg',
      description: 'Professional networking certifications',
    },
    {
      id: 3,
      name: 'Google Cloud Skills',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      description: 'Cloud computing expertise',
    },
    {
      id: 4,
      name: 'Google AI Badges',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      description: 'AI and Machine Learning mastery',
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-32 px-6 bg-[#0a0a0a] relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-[#c5ff00]" />
            <span className="text-xs tracking-widest text-gray-400 uppercase">Recognized Globally</span>
          </div>

          <h2 className="bebas text-4xl md:text-7xl font-bold mb-6 leading-tight uppercase">
            <span className="text-[#c5ff00]">Industry Recognized</span> Learning
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed font-light">
            Earn certifications from world-leading technology companies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className="group bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-all duration-300 p-8"
            >
              <div className="flex flex-col items-center justify-center space-y-6 h-full">
                {/* Logo Container */}
                <div className="w-full h-32 flex items-center justify-center p-4 bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Certification Name */}
                <h3 className="text-base font-semibold text-white text-center group-hover:text-[#c5ff00] transition-colors duration-300">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 text-center leading-relaxed font-light">
                  {cert.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm font-light">
            All programs include certification preparation and exam support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
