
import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-highlight/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link 
              to="/" 
              className="text-2xl font-display font-bold text-white relative group"
            >
              <span className="inline-block transform transition-transform group-hover:scale-105">
                David
                <span className="text-highlight">.</span>
              </span>
            </Link>
            <p className="text-white/60 mt-3 max-w-md">
              Creative designer and developer focused on crafting beautiful digital experiences with attention to detail.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialIcons className="mb-5" />
            <div className="text-sm text-white/60 flex items-center">
              <span>&copy; {currentYear} David Johnson. All rights reserved.</span>
              <span className="inline-flex items-center mx-1.5">
                <span className="mx-1">Made with</span>
                <Heart size={14} className="text-highlight fill-highlight mx-0.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
