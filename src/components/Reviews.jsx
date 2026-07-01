import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function Reviews() {
  const testimonials = [
    {
      name: 'Ramesh K. (Bangalore)',
      role: 'Family Tour Organizer',
      text: 'Rented the 17-seater Tempo Traveller for a family pilgrimage to Tirupati. The bus was super clean and the driver was extremely patient and polite. Will definitely book again!',
      stars: 5,
      date: 'June 2026'
    },
    {
      name: 'Priya Sharma (Tech Corp)',
      role: 'Corporate Travel Lead',
      text: 'Booked the Toyota Innova Crysta for our corporate guests. The service was top-notch, highly professional driver, and the billing was completely transparent. Highly recommended!',
      stars: 5,
      date: 'May 2026'
    },
    {
      name: 'Vikram Aditya (Mysore)',
      role: 'College Student Coordinator',
      text: 'Excellent trip! We rented the 40-seater Deluxe Tourist Bus for our college industrial tour. Safe driving, great speaker system, and very affordable pricing compared to market rates.',
      stars: 5,
      date: 'April 2026'
    },
    {
      name: 'Dr. Anjali Sen (Bengaluru)',
      role: 'Wedding Coordinator',
      text: 'Hired the luxury Force Urbania for wedding guest transportation. Everyone loved the premium legroom and high roof ceiling. Safe driving and excellent support from the admin team!',
      stars: 5,
      date: 'June 2026'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-dark/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Customer Testimonials</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            What Our Travelers Say About Us
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Read real feedback from our satisfied clients who booked group travels, family tours, and corporate rides.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl glass-panel border border-white/5 flex flex-col justify-between hover:border-brand-orange/40 transition-all duration-300 hover:shadow-xl"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                
                {/* Quote Icon */}
                <div className="mb-4 text-brand-orange/20">
                  <MessageSquare size={36} className="stroke-[1.5]" />
                </div>
                
                {/* Text */}
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{test.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">{test.name}</h4>
                  <p className="text-xs text-gray-400">{test.role}</p>
                </div>
                <span className="text-[10px] text-gray-500 font-medium">
                  {test.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
