
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Portfolio', path: '/#portfolio' },
  { name: 'Contact', path: '/#contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Set active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          if (sectionId) {
            setActiveLink(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
          }
        }
      });
      
      if (window.scrollY < 100) {
        setActiveLink('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled ? "bg-dark/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold text-white relative group"
        >
          <span className="inline-block transform transition-transform group-hover:scale-105">
            David
            <span className="text-highlight">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-highlight",
                activeLink === link.name ? "text-highlight" : "text-white/80"
              )}
            >
              <span className="relative">
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-highlight animate-fade-in"></span>
                )}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-dark/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out md:hidden flex flex-col justify-center items-center",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xl font-medium tracking-wide transition-colors duration-300 hover:text-highlight relative",
                activeLink === link.name ? "text-highlight" : "text-white/80"
              )}
              onClick={closeMenu}
            >
              {link.name}
              {activeLink === link.name && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-highlight"></span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
