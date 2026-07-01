import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Check } from 'lucide-react';

export default function Contact({ onBookVehicle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Query',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message out of contact form
    const whatsappNumber = '9663733382';
    const text = `*Jai Tours & Travels Contact Form*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;

    const url = `https://wa.me/91${whatsappNumber}?text=${text}`;
    window.open(url, '_blank');

    setSent(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Query',
      message: ''
    });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
            Contact Jai Tours &amp; Travels
          </h3>
          <p className="text-gray-400 text-base sm:text-lg">
            Have questions about group bookings, outstation tariffs, or driver availability? Reach out to us anytime!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side Info & Maps */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Info Cards */}
            <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-6">
              <h4 className="text-xl font-bold text-white font-heading mb-4 border-b border-white/5 pb-2">
                Booking Office Info
              </h4>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-orange/15 rounded-lg text-brand-orange">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Call for Bookings</h5>
                    <p className="text-sm font-bold text-white mt-1">+91 96637 33382</p>
                    <p className="text-sm font-bold text-white">+91 70905 54733</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-orange/15 rounded-lg text-brand-orange">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">WhatsApp Support</h5>
                    <a 
                      href="https://wa.me/919663733382" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm font-bold text-white hover:text-brand-orange transition-colors flex items-center gap-1.5 mt-1"
                    >
                      <span>Click to Chat (+91 9663733382)</span>
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-orange/15 rounded-lg text-brand-orange">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email Support</h5>
                    <p className="text-sm font-bold text-white mt-1">jaitourstravels12@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-orange/15 rounded-lg text-brand-orange">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Office Address</h5>
                    <p className="text-sm text-gray-300 mt-1">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="glass-panel border border-white/5 rounded-2xl overflow-hidden h-64 relative">
              <iframe 
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d248849.84916296525!2d77.46068531102872!3d12.954294400492813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e897e09860!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 opacity-80"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side Contact Form */}
          <div className="lg:col-span-7 flex">
            <div className="w-full glass-panel border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white font-heading mb-2">Send us a message</h4>
                <p className="text-xs text-gray-400 mb-6">Or get redirects to WhatsApp for immediate replies.</p>
                
                {sent && (
                  <div className="mb-6 p-4 bg-brand-orange/10 border border-brand-orange/30 text-white rounded-lg flex items-center gap-2">
                    <Check size={18} className="text-brand-orange" />
                    <span className="text-sm font-semibold">Message sent! Redirecting to WhatsApp chat...</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Service Required</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-orange transition-colors"
                    >
                      <option value="General Query" className="bg-brand-dark">General Queries / Tariff Request</option>
                      <option value="Outstation Tour" className="bg-brand-dark">Outstation Long Tour Packages</option>
                      <option value="Local Sightseeing" className="bg-brand-dark">One Day Local Sightseeing</option>
                      <option value="Airport Transfer" className="bg-brand-dark">Airport Transfer Service</option>
                      <option value="Wedding Transport" className="bg-brand-dark">Wedding Guests Transportation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Please specify travel dates, passenger counts, start/end locations, or custom details..."
                      className="w-full px-4 py-3 bg-brand-dark/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-lg shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send size={16} /> Send Message on WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
