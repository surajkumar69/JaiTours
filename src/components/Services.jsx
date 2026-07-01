import React from 'react';
import { 
  Plane, MapPin, Compass, Briefcase, 
  GraduationCap, Users, Church, Heart 
} from 'lucide-react';

export default function Services() {
  const servicesData = [
    {
      title: 'Airport Transfer',
      desc: 'Prompt and reliable pickup and drop services to and from major airports.',
      icon: Plane
    },
    {
      title: 'Local Sightseeing',
      desc: 'Discover local attractions, monuments, and markets with custom-guided itineraries.',
      icon: MapPin
    },
    {
      title: 'Outstation Trips',
      desc: 'Comfortable long-distance rentals for weekends, vacations, and cross-state road trips.',
      icon: Compass
    },
    {
      title: 'Corporate Travel',
      desc: 'Polite chauffeurs and premium vehicles for business events, client pickups, and staff commuting.',
      icon: Briefcase
    },
    {
      title: 'School & College Tours',
      desc: 'Safe, high-capacity deluxe buses for educational field trips, picnics, and industrial tours.',
      icon: GraduationCap
    },
    {
      title: 'Family Tours',
      desc: 'Custom tours crafted for small and large families with spacious vehicles and absolute comfort.',
      icon: Users
    },
    {
      title: 'Pilgrimage Tours',
      desc: 'Stress-free trips to popular spiritual and temple destinations with dedicated group vehicles.',
      icon: Church
    },
    {
      title: 'Wedding Transportation',
      desc: 'Flawless transport logistics for guest pick-ups, wedding parties, and luxury entry cars.',
      icon: Heart
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Our Core Services</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Reliable Travel Services for Every Occasion
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            We provide specialized transport logistics and custom tour plans tailored to your specific requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                className="group p-6 rounded-2xl glass-panel border border-white/5 flex flex-col items-start gap-4 hover:border-brand-orange/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-orange/5"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 bg-white/5 border border-white/10 group-hover:bg-brand-orange/20 group-hover:border-brand-orange text-brand-orange rounded-xl flex items-center justify-center transition-colors">
                  <Icon size={24} />
                </div>
                
                {/* Content */}
                <div>
                  <h4 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-brand-orange transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
