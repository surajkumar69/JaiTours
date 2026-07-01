import React from 'react';
import { Users, Info, DollarSign, Fuel, ShieldCheck } from 'lucide-react';
import innovaImg from '../assets/images/Innova.jpeg';
import toofanImg from '../assets/images/Toofan.jpeg';
import busImg from '../assets/images/TouristBus.jpeg';
import urbaniaImg from '../assets/images/Urbania.jpeg';

export default function Fleet({ onBookVehicle }) {
  const fleetData = [
    {
      id: 'innova',
      name: 'Toyota Innova Crysta',
      type: 'Premium SUV',
      image: innovaImg,
      capacity: '6 - 7 Passengers',
      price: '₹14 / km',
      features: ['Plush Captain Seats', 'Dual-zone Climate Control', 'GPS Navigation & Airbags', 'Spacious Boot Space'],
      tag: 'Best Seller'
    },
    {
      id: 'toofan',
      name: 'Force Cruiser Toofan',
      type: 'Multi Utility Vehicle',
      image: toofanImg,
      capacity: '9 - 12 Passengers',
      price: '₹16 / km',
      features: ['Spacious Cabin Seating', 'AC Comfort Ventilation', 'High Ground Clearance', 'Ample Rear Luggage Space'],
      tag: 'Group Travel'
    },
    {
      id: 'urbania',
      name: 'Force Urbania',
      type: 'Ultra Luxury Van',
      image: urbaniaImg,
      capacity: '17 Passengers',
      price: '₹24 / km',
      features: ['Individual Aircon Vents', 'Aesthetic Luxury Cabin', 'Extra Legroom / High Roof', 'Bluetooth Entertainment'],
      tag: 'Premium Luxury'
    },
    {
      id: 'bus',
      name: 'Deluxe Tourist Bus',
      type: 'Large Capacity Coach',
      image: busImg,
      capacity: '30 - 50 Passengers',
      price: '₹35 / km',
      features: ['Air Suspension Comfort', 'Belly Luggage Compartments', 'LCD TV & PA Mic System', 'Charging Ports & Fan/AC'],
      tag: 'Mass Touring'
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-brand-dark/40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/50 to-brand-dark/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Our Premium Fleet</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Select the Perfect Ride for Your Journey
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Choose from our highly maintained and clean vehicle classes. Driven by professional and polite chauffeurs for a safe and hassle-free tour.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleetData.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="group relative rounded-2xl glass-panel border border-white/5 overflow-hidden flex flex-col hover:border-brand-orange/40 hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full bg-brand-dark/30 overflow-hidden relative border-b border-white/5">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge Tag */}
                <div className="absolute top-4 left-4 bg-brand-orange/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {vehicle.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="flex-grow flex flex-col">
                  <div className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-1">
                    {vehicle.type}
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-brand-orange transition-colors">
                    {vehicle.name}
                  </h4>

                  {/* Quick specs */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Users size={16} className="text-brand-orange" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Fuel size={16} className="text-brand-orange" />
                      <span>Clean / AC Equipped</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <ShieldCheck size={16} className="text-brand-orange" />
                      <span>GPS Enabled</span>
                    </div>
                  </div>

                  {/* Expanded Key Features to fill remaining card space */}
                  <div className="border-t border-white/5 pt-5 mt-auto flex-grow">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Key Features</h5>
                    <ul className="space-y-2.5">
                      {vehicle.features.map((feature, index) => (
                        <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
