import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "1M", label: "CUSTOMERS", color: "#8B7E57" },
    { number: "12", label: "YEARS OF EXCELLENCE", color: "#B35977" },
    { number: "41", label: "R&D ENGINEERS", color: "#A18A60" },
    { number: "78", label: "COUNTRIES", color: "#B78B4B" },
    { number: "3287", label: "PARTNERS", color: "#B0904D" },
    { number: "41", label: "AWARDS RECEIVED", color: "#A28A5B" }
  ];

  return (
    <div className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-orange-500 font-medium mb-3">WHY REGISTER KARO</h3>
        <h2 className="text-4xl font-bold text-stone-800 mb-16">Some Numbers are important</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}<sup>+</sup>
              </span>
              <span className="text-sm font-semibold text-stone-800">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;