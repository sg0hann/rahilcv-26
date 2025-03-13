
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import SocialIcons from './SocialIcons';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current && contentRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        
        // Calculate the center of the elements
        const imageXCenter = imageRect.left + imageRect.width / 2;
        const imageYCenter = imageRect.top + imageRect.height / 2;
        const contentXCenter = contentRect.left + contentRect.width / 2;
        const contentYCenter = contentRect.top + contentRect.height / 2;
        
        // Calculate the mouse distance from the center
        const mouseXFromImage = (e.clientX - imageXCenter) / 50;
        const mouseYFromImage = (e.clientY - imageYCenter) / 50;
        const mouseXFromContent = (e.clientX - contentXCenter) / 100;
        const mouseYFromContent = (e.clientY - contentYCenter) / 100;
        
        // Apply subtle transform to the image and content
        imageRef.current.style.transform = `translate(${mouseXFromImage * -1}px, ${mouseYFromImage * -1}px)`;
        contentRef.current.style.transform = `translate(${mouseXFromContent}px, ${mouseYFromContent}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-highlight/5 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 mt-10 md:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
          <div 
            ref={contentRef}
            className="w-full md:w-1/2 text-left md:pr-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="inline-flex items-center justify-center py-1 px-3 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              <span className="text-xs font-medium text-white/70">Hello, It's Me</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white leading-tight animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
              David Johnson
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-6 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
              And I'm a <span className="text-highlight highlight-glow">Frontend Developer</span>
            </h2>
            
            <p className="text-white/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.7s' }}>
              I'm a creative graphic designer and web developer with a passion for visual storytelling and seamless user experiences. My work reflects both my design skills and technical expertise.
            </p>
            
            <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button className="bg-highlight hover:bg-highlight-hover text-dark font-medium py-2.5 px-6 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(44,255,190,0.3)]">
                <a href="#contact">Contact Me</a>
              </Button>
              
              <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white py-2.5 px-6 rounded-md backdrop-blur-sm">
                <a href="/David_Johnson_CV.pdf" download="David_Johnson_CV.pdf">Download CV</a>
              </Button>
            </div>
            
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
              <SocialIcons />
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 flex items-center justify-center animate-zoom-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative perspective w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 shape-blob bg-highlight animate-glow-pulse flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b992c4fd-44ad-462e-a639-edd57a4af591.png" 
                  alt="David Johnson" 
                  className="w-[95%] h-[95%] object-cover rounded-full" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <button 
            onClick={scrollToNextSection}
            className="flex flex-col items-center justify-center text-white/50 hover:text-highlight transition-colors duration-300"
            aria-label="Scroll down"
          >
            <span className="text-xs mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
