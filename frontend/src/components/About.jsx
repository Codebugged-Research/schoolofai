import React from 'react';
import { CheckCircle2, Target, Users2, Lightbulb } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Practical AI Workflows',
      description: 'Learn real-world applications that you can implement immediately',
    },
    {
      icon: CheckCircle2,
      title: 'No Coding Required',
      description: 'Focus on AI tools and strategies, not programming',
    },
    {
      icon: Lightbulb,
      title: 'Real-World AI Tools',
      description: 'Master the latest AI platforms and productivity tools',
    },
    {
      icon: Users2,
      title: 'Small Interactive Batches',
      description: 'Personalized attention with batch sizes of just 10 students',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-xs tracking-widest text-gray-400 mb-4 uppercase">
            WHY CHOOSE US
          </div>
          <h2 className="bebas text-5xl md:text-7xl font-bold mb-6 leading-tight uppercase">
            Why Choose <span className="text-[#c5ff00]">KIDLIN</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed font-light">
            We're not just another online course. KIDLIN provides practical, hands-on AI education 
            designed for real-world productivity and career advancement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex items-start gap-6 p-8 bg-[#1a1a1a] border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#c5ff00]/10 border border-[#c5ff00]/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#c5ff00]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#c5ff00] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Productivity Focus Section */}
        <div className="max-w-4xl mx-auto p-12 bg-[#1a1a1a] border border-gray-800">
          <h3 className="bebas text-4xl md:text-5xl font-bold mb-6 text-[#c5ff00] uppercase">
            Productivity-Focused Learning
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
            Our programs are designed to maximize your productivity and efficiency. 
            Learn to leverage AI tools that save time, automate workflows, and enhance decision-making.
          </p>
          <p className="text-white font-medium">
            Transform the way you work with AI — no technical background required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
