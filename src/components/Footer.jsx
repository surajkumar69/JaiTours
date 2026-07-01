import React from 'react';
import { ArrowUp } from 'lucide-react';
import logoImg from '../assets/images/logo.jpeg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Jai Tours Logo" className="h-10 w-10 rounded-lg object-cover" />
              <div className="flex flex-col">
                <span className="text-lg font-bold font-heading text-white tracking-wider">JAI TOURS</span>
                <span className="text-[9px] text-gray-400 font-semibold tracking-widest -mt-1 uppercase">&amp; Travels</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium tours and travels rental service in India. Providing clean cabs,Tempo Travellers, and deluxe buses with certified chauffeurs.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white text-gray-400 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white text-gray-400 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white text-gray-400 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:border-brand-orange hover:text-white text-gray-400 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#fleet" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Our Vehicle Fleet</a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#destinations" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Trending Hotspots</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Our Fleet Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-heading">
              Available Cars
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#fleet" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Toyota Innova Crysta</a>
              </li>
              <li>
                <a href="#fleet" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Force Cruiser Toofan</a>
              </li>
              <li>
                <a href="#fleet" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Force Urbania Luxury</a>
              </li>
              <li>
                <a href="#fleet" className="text-sm text-gray-400 hover:text-brand-orange transition-colors">Deluxe Tourist Bus</a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 font-heading">
              Business Inquiries
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-500">Phone Support:</span>
                <span className="text-white font-semibold mt-0.5">+91 9663733382</span>
                <span className="text-white font-semibold">+91 7090554733</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-500">Email Address:</span>
                <span className="text-white mt-0.5">jaitourstravels12@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Jai Tours &amp; Travels. All rights reserved. Designed with style and comfort in mind.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-brand-orange border border-white/10 hover:border-brand-orange hover:text-white text-gray-400 rounded-lg transition-all flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
