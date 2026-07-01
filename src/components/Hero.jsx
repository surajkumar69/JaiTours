import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import logoImg from '../assets/images/logo.jpeg';

export default function Hero({ onBookNow }) {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-brand-dark pt-16">
      {/* Background Image with Deep Blue Gradients */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[pulse_8s_infinite]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920')`, // Beautiful travel image
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/50 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-transparent to-brand-dark/20 z-0" />

      {/* Grid Background Effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6 max-w-2xl">
          {/* Logo / Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <img src={logoImg} alt="Jai Tours logo" className="h-6 w-6 rounded-full object-cover" />
            <span className="text-xs font-bold tracking-wider text-brand-orange uppercase">
              Jai Tours &amp; Travels
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-none"
          >
            Explore India <br />
            <span className="text-gradient-orange">With Absolute Comfort</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans"
          >
            Experience premium luxury rentals with our state-of-the-art fleet. 
            Book top-of-the-line Toyota Innova Crysta, Force Cruiser Toofan, Force Urbania, or Deluxe Tourist Buses for safe and smooth outstation tours, weddings, airport drops, and group trips.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => onBookNow()}
              className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-xl shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
            >
              <Calendar size={18} />
              <span>Book Your Ride</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:9741633398"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <Phone size={18} className="text-brand-orange" />
              <span>Call +91 97416 33398</span>
            </a>
          </motion.div>

          {/* Core Info Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-heading text-brand-orange">100%</p>
              <p className="text-xs text-gray-400">Safe Journeys</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-heading text-brand-orange">24/7</p>
              <p className="text-xs text-gray-400">Active Support</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold font-heading text-brand-orange">Best</p>
              <p className="text-xs text-gray-400">Rental Rates</p>
            </div>
          </motion.div>
        </div>

        {/* Right Preview Card / Vehicle Collage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md lg:max-w-none"
        >
          <div className="relative p-6 rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-2xl">
            {/* Ambient background glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-navy/30 rounded-full blur-3xl" />
            
            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-brand-dark/50 relative border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" 
                  alt="Travel bus" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-4 left-4 bg-brand-dark/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Premium Rentals</span>
                </div>
              </div>
              <div className="p-2 space-y-2">
                <h3 className="text-lg font-bold text-white font-heading">Need instant transportation?</h3>
                <p className="text-sm text-gray-400">
                  Whether you are planning a trip to a pilgrimage site, an outstation getaway with family, or handling airport guest transfers, we have vehicles ready.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <button 
                    onClick={() => onBookNow()}
                    className="flex-1 py-3 bg-brand-navy hover:bg-brand-navy/80 border border-white/10 text-white text-xs font-bold rounded-lg transition-all"
                  >
                    Check Vehicles
                  </button>
                  <a 
                    href="https://wa.me/919741633398" 
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
