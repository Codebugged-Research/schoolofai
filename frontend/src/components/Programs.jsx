import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Users, Clock, DollarSign, GraduationCap, Briefcase, Rocket } from 'lucide-react';

export const Programs = () => {
  const programs = [
    {
      id: 1,
      name: 'AI Spark',
      subtitle: 'Young Innovators Program',
      description: 'For school students aged 12–18',
      hours: '10 Hours',
      batchSize: '10',
      price: '$1250',
      icon: GraduationCap,
    },
    {
      id: 2,
      name: 'AI Launchpad',
      subtitle: 'Career Accelerator Program',
      description: 'For college students',
      hours: '10 Hours',
      batchSize: '10',
      price: '$1500',
      icon: Rocket,
      featured: true,
    },
    {
      id: 3,
      name: 'AI Edge',
      subtitle: 'Professional AI Productivity & Business Program',
      description: 'For professionals, founders, and managers',
      hours: '10 Hours',
      batchSize: '10',
      price: '$2000',
      icon: Briefcase,
    },
  ];

  return (
    <section id="programs" className="py-32 px-6 bg-black relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-xs tracking-widest text-gray-400 mb-4 uppercase">
            THE PROGRAMS
          </div>
          <h2 className="bebas text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase">
            One Weekend. Lifetime of AI Skills.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed font-light">
            While others debate if AI will take their jobs, you'll learn to make AI work for you. This isn't theory – it's a hands-on workshop that delivers real transformation.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.id}
                className="group relative bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                {/* {program.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-[#c5ff00] text-black text-xs font-bold px-3 py-1 uppercase tracking-wide">
                      POPULAR
                    </span>
                  </div>
                )} */}

                <CardHeader className="space-y-4 pb-4">
                  <div className="w-10 h-10 bg-[#c5ff00]/10 border border-[#c5ff00]/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#c5ff00]" />
                  </div>

                  <div>
                    <CardTitle className="bebas text-3xl font-bold text-white mb-2 uppercase tracking-wide">
                      {program.name}
                    </CardTitle>
                    <p className="text-[#c5ff00] font-medium mb-3 text-sm">
                      {program.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm">{program.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Program Details */}
                  <div className="space-y-3 border-t border-gray-800 pt-4">
                    <div className="flex items-center justify-between text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{program.hours}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">Batch Size: {program.batchSize}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="bebas text-2xl text-white">{program.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-transparent hover:bg-[#c5ff00]/10 border border-gray-700 hover:border-[#c5ff00] text-white hover:text-[#c5ff00] transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
