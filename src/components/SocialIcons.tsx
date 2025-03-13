
import React from 'react';
import { Facebook, Twitter, Linkedin, GitHub, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  vertical?: boolean;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  className, 
  iconSize = 18,
  vertical = false 
}) => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: GitHub, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <div 
      className={cn(
        "flex items-center gap-3",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="relative group transition-all duration-300 ease-in-out"
        >
          <div className="absolute inset-0 rounded-full bg-highlight opacity-0 transform scale-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-300 ease-in-out"></div>
          <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-highlight hover:border-highlight/30 transition-all duration-300">
            <social.icon size={iconSize} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
