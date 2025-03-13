
import React from 'react';
import { Code, PenTool, Smartphone, Globe, Zap, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.FC<{ size?: number; className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Creating responsive, fast-loading websites using modern technologies like React, TypeScript, and more.'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Crafting visually appealing designs for logos, brand identities, marketing materials, and more.'
  },
  {
    icon: Smartphone,
    title: 'Mobile UI Design',
    description: 'Designing intuitive and engaging user interfaces for mobile applications across platforms.'
  },
  {
    icon: Globe,
    title: 'SEO Optimization',
    description: "Improving your website's visibility in search engines to drive more organic traffic."
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Enhancing website speed and performance for better user experience and search rankings.'
  },
  {
    icon: Users,
    title: 'User Experience Design',
    description: 'Creating seamless and intuitive user experiences that keep visitors engaged.'
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_30px_rgba(44,255,190,0.1)] group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-highlight/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-highlight/20">
        <Icon size={24} className="text-highlight" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-[-10%] w-[60%] h-[60%] rounded-full bg-highlight/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <div className="inline-flex items-center justify-center py-1 px-3 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <span className="text-xs font-medium text-white/70">My Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-white/70 leading-relaxed">
            I provide a range of creative and technical services to help businesses and individuals establish a strong online presence and stand out from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-highlight/10 blur-xl rounded-full transform scale-150"></div>
            <a 
              href="#contact" 
              className="relative inline-flex items-center justify-center py-3 px-8 rounded-full bg-highlight text-dark font-medium hover:bg-highlight-hover transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(44,255,190,0.3)]"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
