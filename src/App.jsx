import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const handleOpenBooking = (vehicleName = '') => {
    setSelectedVehicle(vehicleName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedVehicle('');
  };

  return (
    <div className="bg-brand-dark text-white min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <Navbar onBookNow={() => handleOpenBooking('')} />

      {/* Hero Section */}
      <Hero onBookNow={() => handleOpenBooking('')} />

      {/* Main Content Sections */}
      <div className="space-y-4">
        {/* Fleet Section */}
        <Fleet onBookVehicle={handleOpenBooking} />
        
        {/* Services Section */}
        <Services />
        
        {/* Destinations Section */}
        <Destinations />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Testimonials/Reviews */}
        <Reviews />
        
        {/* Contact Form & Office Info */}
        <Contact onBookVehicle={handleOpenBooking} />
      </div>

      {/* Footer */}
      <Footer />

      {/* Booking Modal overlay */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={handleCloseBooking} 
        selectedVehicle={selectedVehicle}
      />
    </div>
  );
}

export default App;
