import React from 'react';
import { ArrowRight } from 'lucide-react';

const HappyClients = () => {
  // Array of client logos with positioning classes for the scattered effect
  const clientLogos = [
    { id: 1, icon: "🔵", color: "bg-teal-500", position: "left-24 top-36" },
    { id: 2, icon: "▲", color: "bg-blue-500", position: "left-80 top-16" },
    { id: 3, icon: "Ü", color: "bg-purple-600", position: "left-1/2 top-12" },
    { id: 4, icon: "📊", color: "bg-red-500 bg-blue-400", position: "right-80 top-24" },
    { id: 5, icon: "F", color: "bg-blue-500", position: "right-40 top-16" },
    { id: 6, icon: "≡", color: "bg-gray-800", position: "right-24 top-28" },
    { id: 7, icon: "•••", color: "bg-red-400", position: "right-8 top-32" },
    { id: 8, icon: "📌", color: "bg-red-600", position: "left-64 bottom-24" },
    { id: 9, icon: "🛒", color: "bg-green-500", position: "left-1/3 bottom-20" },
    { id: 10, icon: "⊕", color: "bg-gray-300", position: "left-1/2 bottom-12" },
    { id: 11, icon: "✓", color: "bg-teal-400", position: "right-16 bottom-24" },
    { id: 12, icon: "📂", color: "bg-blue-500", position: "right-1/2 top-1/2" },
    { id: 13, icon: "💎", color: "bg-yellow-400", position: "left-1/2 bottom-48" },
    { id: 14, icon: "🌟", color: "bg-blue-400", position: "left-72 top-1/2" },
    { id: 15, icon: "📊", color: "bg-yellow-300 bg-red-400", position: "left-36 bottom-36" },
    { id: 16, icon: "🔄", color: "bg-blue-500", position: "right-36 bottom-32" },
    { id: 17, icon: "🪐", color: "bg-gray-400", position: "right-20 bottom-16" },
    { id: 18, icon: "📱", color: "bg-red-300 bg-blue-400", position: "right-1/3 bottom-40" },
    { id: 19, icon: "🐒", color: "bg-gray-600", position: "left-16 bottom-16" },
    { id: 20, icon: "⊞", color: "bg-blue-500 bg-green-500", position: "right-1/2 bottom-24" }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Happy Clients</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>

      {/* Logo cloud with scattered positioning */}
      <div className="relative h-96 max-w-6xl mx-auto">
        {clientLogos.map((logo) => (
          <div 
            key={logo.id} 
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${logo.position}`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
              <div className="text-2xl">{logo.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className="text-center mt-8">
        <button className="inline-flex items-center text-blue-800 font-medium">
          Show more
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default HappyClients;