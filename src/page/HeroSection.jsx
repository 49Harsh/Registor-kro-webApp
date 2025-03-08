import React, { useState } from 'react';
import { Check } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your form submission logic here
  };

  return (
    <div className="w-full py-16 px-6 bg-gradient-to-r from-orange-400 via-amber-500 to-blue-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold mb-3 tracking-wide">1% OF THE INDUSTRY</p>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Welcome to your new digital reality. Now.
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row mb-12 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow px-4 py-3 rounded-l text-gray-800 w-full sm:w-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="bg-orange-400 text-white font-medium px-6 py-3 rounded-r hover:bg-orange-500 transition-colors mt-2 sm:mt-0"
          >
            Submit
          </button>
        </form>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 rounded-full p-1 mr-2">
              <Check className="h-4 w-4" />
            </div>
            <span>Instant results</span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 rounded-full p-1 mr-2">
              <Check className="h-4 w-4" />
            </div>
            <span>User-friendly interface</span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 rounded-full p-1 mr-2">
              <Check className="h-4 w-4" />
            </div>
            <span>Personalized customization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;