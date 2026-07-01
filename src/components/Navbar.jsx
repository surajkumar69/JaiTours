import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImg from '../assets/images/logo.jpeg';

export default function Navbar({ onBookNow }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'py-3 glass-navbar shadow-lg shadow-black/20' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Jai Tours Logo" 
              className="h-12 w-12 rounded-lg object-cover border border-white/20 group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold font-heading text-white tracking-wide group-hover:text-brand-orange transition-colors">
                JAI TOURS
              </span>
              <span className="text-[10px] text-gray-400 font-semibold tracking-widest -mt-1 uppercase">
                &amp; Travels
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:9663733382" 
              className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-brand-orange transition-colors"
            >
              <Phone size={14} className="text-brand-orange" />
              <span>9663733382</span>
            </a>
            <button
              onClick={onBookNow}
              className="px-5 py-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-bold rounded-lg shadow-md shadow-brand-orange/20 transition-all hover:scale-105 active:scale-95"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } overflow-hidden bg-brand-dark/95 border-b border-white/5 backdrop-blur-lg`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5 flex flex-col gap-4 px-3">
            <a 
              href="tel:9663733382" 
              className="flex items-center gap-2 text-sm font-medium text-gray-300"
            >
              <Phone size={16} className="text-brand-orange" />
              <span>+91 9663733382</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookNow();
              }}
              className="w-full py-3 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-lg transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
