import React, { useState } from 'react';
import innovaImg from '../assets/images/Innova.jpeg';
import travellerImg from '../assets/images/TempoTraveller.jpeg';
import busImg from '../assets/images/TouristBus.jpeg';
import urbaniaImg from '../assets/images/Urbania.jpeg';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Force Tempo Traveller Side view',
      category: 'vehicles',
      image: travellerImg
    },
    {
      id: 2,
      title: 'Toyota Innova Crysta Premium Cab',
      category: 'vehicles',
      image: innovaImg
    },
    {
      id: 3,
      title: 'Force Urbania Luxury Van',
      category: 'vehicles',
      image: urbaniaImg
    },
    {
      id: 4,
      title: 'Deluxe Tourist Bus Charter',
      category: 'vehicles',
      image: busImg
    },
    {
      id: 5,
      title: 'Pilgrimage temple tour group',
      category: 'tours',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600'
    },
    {
      id: 6,
      title: 'Scenic Hillstation Drive',
      category: 'tours',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600'
    },
    {
      id: 7,
      title: 'Goa Coastal Beach Road Tour',
      category: 'tours',
      image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600'
    },
    {
      id: 8,
      title: 'Happy travelers group outing',
      category: 'tours',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'vehicles', label: 'Our Fleet' },
    { key: 'tours', label: 'Tour Scenic Views' }
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Photo Gallery</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Glimpses of Our Fleet &amp; Tours
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Browse through real photographs of our high-end luxury vehicles and popular travel destinations across India.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === filter.key
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="group aspect-square rounded-2xl overflow-hidden border border-white/5 relative shadow-lg hover:border-brand-orange/30 transition-all duration-300"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange mb-1">
                  {item.category === 'vehicles' ? 'Fleet Car' : 'Tour Route'}
                </span>
                <h4 className="text-base font-bold text-white font-heading leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
