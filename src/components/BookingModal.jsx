import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Clock, Send, Check } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedVehicle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    date: '',
    days: '1',
    passengers: '4',
    pickup: '',
    destination: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedVehicle) {
      setFormData(prev => ({ ...prev, vehicle: selectedVehicle }));
    }
  }, [selectedVehicle]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;
    if (name === 'days' && parseInt(value) < 1) {
      finalValue = '1';
    }
    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappNumber = '9741633398'; // Primary contact
    const text = `*Jai Tours & Travels Booking Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Vehicle Selected:* ${formData.vehicle}%0A` +
      `*Journey Date:* ${formData.date}%0A` +
      `*Duration:* ${formData.days} Day(s)%0A` +
      `*Passengers:* ${formData.passengers}%0A` +
      `*Pickup Location:* ${formData.pickup}%0A` +
      `*Destination:* ${formData.destination}%0A` +
      (formData.message ? `*Additional Message:* ${formData.message}` : '');

    const url = `https://wa.me/91${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  const vehicles = [
    'Toyota Innova Crysta (6-7 Seater)',
    'Toyota Innova (6-7 Seater)',
    'Force Urbania (Luxury 17 Seater)',
    'Force Cruiser Toofan (12 Seater)',
    'Sedan Cars (4+1 Seater - Dzire/Etios)',
    '12 Seater Executive Coach (AC / Non-AC)',
    '21 Seater Deluxe Coach (AC / Non-AC)',
    '25 Seater Deluxe Coach (AC / Non-AC)',
    '29 Seater Deluxe Coach (AC / Non-AC)',
    '33 Seater Deluxe Coach (AC / Non-AC)',
    '35 Seater Deluxe Coach (AC / Non-AC)',
    '40 Seater Deluxe Coach (2+2 Layout, AC / Non-AC)',
    '45 Seater Deluxe Coach (2+2 Layout, AC / Non-AC)',
    '49 Seater Deluxe Coach (AC / Non-AC)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl glass-panel text-white shadow-2xl transition-all border border-white/10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div>
            <h3 className="text-2xl font-bold font-heading text-white">Book Your Ride</h3>
            <p className="text-sm text-gray-400">Provide details for a quick quote</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-16 h-16 bg-brand-orange/20 border border-brand-orange text-brand-orange rounded-full flex items-center justify-center mb-4 animate-bounce">
              <Check size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Redirecting to WhatsApp...</h4>
            <p className="text-gray-400 max-w-xs">
              Opening chat with Jai Tours & Travels to finalize your booking quotation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
            {/* Passenger & Vehicle Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Select Vehicle *
                </label>
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
                >
                  <option value="" disabled className="bg-brand-dark text-gray-400">Choose a vehicle</option>
                  {vehicles.map((v, i) => (
                    <option key={i} value={v} className="bg-brand-dark text-white">{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter 10-digit number"
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            {/* Travel Route */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  placeholder="E.g., Bangalore Airport"
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Destination *
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  placeholder="E.g., Mysore Palace"
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            {/* Dates & Passengers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Calendar size={12} className="text-brand-orange" /> Travel Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Clock size={12} className="text-brand-orange" /> Days *
                </label>
                <input
                  type="number"
                  name="days"
                  min="1"
                  value={formData.days}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Users size={12} className="text-brand-orange" /> Passengers *
                </label>
                <input
                  type="number"
                  name="passengers"
                  min="1"
                  value={formData.passengers}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Special Requests / Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="E.g., Need baby seat, extra luggage space, or round-trip details..."
                className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-semibold rounded-lg shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
            >
              <Send size={16} /> Send Enquiry via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
