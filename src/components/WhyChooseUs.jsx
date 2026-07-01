import React from 'react';
import { UserCheck, ShieldCheck, HelpCircle, Landmark, MapPin, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Professional Drivers',
      desc: 'Highly experienced, verified, polite, and well-trained drivers who prioritize your safety.',
      icon: UserCheck
    },
    {
      title: 'Sanitized & Clean Fleet',
      desc: 'Our vehicles are thoroughly washed, cleaned, and sanitized before every trip.',
      icon: ShieldCheck
    },
    {
      title: '24/7 Roadside Support',
      desc: 'Active customer support desk and vehicle replacement backup in case of emergencies.',
      icon: HelpCircle
    },
    {
      title: 'Affordable & Fair Rates',
      desc: 'Transparent pricing with absolutely zero hidden charges. You pay exactly what we quote.',
      icon: Landmark
    },
    {
      title: 'GPS Tracked Security',
      desc: 'Live location tracking enabled on all vehicles for complete passenger safety.',
      icon: MapPin
    },
    {
      title: 'Comfortable Journeys',
      desc: 'Well-maintained vehicle shock-absorbers, working ACs, and comfortable pushback seating.',
      icon: Smile
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Our Core Values</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Why Choose Jai Tours &amp; Travels?
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            We are dedicated to providing the highest standards of safety, comfort, and reliability.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-2xl glass-panel border border-white/5 flex gap-6 items-start hover:border-brand-orange/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/5"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 group-hover:bg-brand-orange/20 group-hover:border-brand-orange text-brand-orange rounded-full flex items-center justify-center transition-colors">
                  <Icon size={22} />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white font-heading group-hover:text-brand-orange transition-colors">
                    {pt.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {pt.desc}
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
