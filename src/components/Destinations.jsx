import React from 'react';
import { MapPin } from 'lucide-react';

export default function Destinations() {
  const destinations = [
    {
      name: 'Goa',
      tagline: 'Sun-kissed Beaches & Heritage',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600',
      duration: '3-4 Days Recommended'
    },
    {
      name: 'Manali',
      tagline: 'Snowy Peaks & Adventure Sports',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600',
      duration: '4-5 Days Recommended'
    },
    {
      name: 'Shimla',
      tagline: 'Colonial Charm & Toy Trains',
      image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=600',
      duration: '3-4 Days Recommended'
    },
    {
      name: 'Kashmir',
      tagline: 'Tranquil Houseboats & Shikara Rides',
      image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?q=80&w=600',
      duration: '5-6 Days Recommended'
    },
    {
      name: 'Ooty',
      tagline: 'Lush Tea Gardens & Nilgiri Hills',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=600',
      duration: '2-3 Days Recommended'
    },
    {
      name: 'Jaipur',
      tagline: 'The Pink City: Royal Palaces & Forts',
      image: 'https://images.unsplash.com/photo-1477584304405-53ffb7851342?q=80&w=600',
      duration: '3-4 Days Recommended'
    },
    {
      name: 'Darjeeling',
      tagline: 'Panoramic Kanchenjunga Sunrise Views',
      image: 'https://images.unsplash.com/photo-1559139225-30ab30248a60?q=80&w=600',
      duration: '3-4 Days Recommended'
    },
    {
      name: 'Kerala',
      tagline: 'Backwaters, Houseboats & Ayurveda',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600',
      duration: '5-6 Days Recommended'
    }
  ];

  return (
    <section id="destinations" className="py-24 bg-brand-dark/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Trending Destinations</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Popular Spots to Visit in India
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Let our professional drivers navigate the roads while you and your group sit back, relax, and take in the beautiful landscapes.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div 
              key={idx}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-xl border border-white/5 hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image background */}
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />
              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              
              {/* Card content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-1 text-brand-orange font-bold mb-1.5">
                  <MapPin size={14} />
                  <span className="text-xs uppercase tracking-wider">{dest.name}</span>
                </div>
                
                <h4 className="text-xl font-bold text-white font-heading mb-1 leading-snug group-hover:text-brand-orange transition-colors">
                  {dest.name} Tour Packages
                </h4>
                
                <p className="text-xs text-gray-300 mb-4 line-clamp-2">
                  {dest.tagline}
                </p>
                
                <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                    {dest.duration}
                  </span>
                  <a 
                    href="https://wa.me/919741633398" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-bold text-white hover:text-brand-orange transition-colors flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Enquire</span> &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
