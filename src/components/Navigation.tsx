
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            Detangle<span className="text-primary">AI</span>
          </div>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('services')} className="hover-underline-animation text-sm font-medium cursor-pointer">Services</a>
          <a onClick={() => scrollToSection('about')} className="hover-underline-animation text-sm font-medium cursor-pointer">About</a>
          <a onClick={() => scrollToSection('testimonials')} className="hover-underline-animation text-sm font-medium cursor-pointer">Case Studies</a>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={cn(
            "w-6 h-0.5 bg-foreground transition-all duration-300",
            isMobileMenuOpen && "translate-y-1.5 rotate-45"
          )} />
          <div className={cn(
            "w-6 h-0.5 bg-foreground my-1.5 transition-opacity duration-300",
            isMobileMenuOpen && "opacity-0"
          )} />
          <div className={cn(
            "w-6 h-0.5 bg-foreground transition-all duration-300",
            isMobileMenuOpen && "-translate-y-1.5 -rotate-45"
          )} />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col space-y-4 px-6">
          <a onClick={() => scrollToSection('services')} className="py-2 hover:text-primary transition-colors cursor-pointer">Services</a>
          <a onClick={() => scrollToSection('about')} className="py-2 hover:text-primary transition-colors cursor-pointer">About</a>
          <a onClick={() => scrollToSection('testimonials')} className="py-2 hover:text-primary transition-colors cursor-pointer">Case Studies</a>
          <button 
            onClick={() => scrollToSection('contact')}
            className="py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
