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

        {/* Seating Capacities Specifications Directory */}
        <div className="mt-20 p-8 rounded-2xl glass-panel border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/15 rounded-full blur-3xl" />
          
          <div className="text-center md:text-left mb-8 relative z-10">
            <h4 className="text-2xl font-bold text-white font-heading mb-2">Complete Seating Capacity & Fleet Directory</h4>
            <p className="text-sm text-gray-400">
              We offer a complete range of AC and Non-AC coaches, luxury vans, and premium cabs to accommodate any group size comfortably.
            </p>
          </div>

          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs text-brand-orange uppercase font-bold tracking-wider">
                  <th className="py-4 px-4">Seating Capacity</th>
                  <th className="py-4 px-4">Vehicle Category & Models</th>
                  <th className="py-4 px-4">AC / Non-AC Availability</th>
                  <th className="py-4 px-4">Layout & Comfort Config</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">49 Seater</td>
                  <td className="py-4 px-4">Super Deluxe Large Touring Coach</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">Pushback Seats, Air Suspension, LED TV, Fan/AC</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">45 Seater</td>
                  <td className="py-4 px-4">Luxury Multi-Axle Tourist Bus</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">2+2 Seating Layout, Premium Audio System</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">40 Seater</td>
                  <td className="py-4 px-4">Luxury Touring Coach Bus</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">2+2 Seating Layout, Reclining Seats, GPS</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">35 Seater</td>
                  <td className="py-4 px-4">Midi Tourist Bus Coach</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">Pushback Seats, Microphone for Tours, AC/Fan</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">33 Seater</td>
                  <td className="py-4 px-4">Standard Deluxe Touring Coach</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">Clean Cabins, Roof Carrier, Pushback Seating</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">29 Seater</td>
                  <td className="py-4 px-4">Deluxe Minibus Coach</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">Reclining Seats, Fan/AC, Luggage Trunk</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">25 Seater</td>
                  <td className="py-4 px-4">Executive Minibus / Coach</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">Individual AC Vents, Pushback Cushioned Seats</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">21 Seater</td>
                  <td className="py-4 px-4">Midi Deluxe Minivan Coach</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">AC/Non-AC, Reclining Seats, Music System</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">12 Seater</td>
                  <td className="py-4 px-4">Force Tempo Traveller / Executive Coach</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Both Available</span></td>
                  <td className="py-4 px-4">Luxurious Captain Seats, Roof luggage carrier</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Urbania</td>
                  <td className="py-4 px-4">Force Urbania Luxury Van</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-orange-500/10 text-brand-orange text-xs font-semibold">AC Equipped</span></td>
                  <td className="py-4 px-4">Aesthetic Luxury Cabin, Extra Legroom, High Roof</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Innova Crysta</td>
                  <td className="py-4 px-4">Toyota Innova Crysta</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-orange-500/10 text-brand-orange text-xs font-semibold">AC Equipped</span></td>
                  <td className="py-4 px-4">Premium Captain Seats, Rear AC, GPS & Airbags</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Innova</td>
                  <td className="py-4 px-4">Toyota Innova Premium Cab</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-orange-500/10 text-brand-orange text-xs font-semibold">AC Equipped</span></td>
                  <td className="py-4 px-4">Spacious Boot, Cushioned Captain/Bench Seating</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">Sedan Cars</td>
                  <td className="py-4 px-4">Dzire, Etios (4+1 Seater Cabs)</td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded bg-orange-500/10 text-brand-orange text-xs font-semibold">AC Equipped</span></td>
                  <td className="py-4 px-4">Budget-Friendly, Clean Cab, Chauffeur Driven</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
