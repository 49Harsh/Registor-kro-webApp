import React, { memo } from 'react';

const StatCard = memo(({ number, label, color }) => (
  <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color }}>
      {number}+
    </h3>
    <p className="text-sm sm:text-base text-gray-700 font-medium mt-2 text-center">
      {label}
    </p>
  </div>
));

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
    <section 
      className="py-12 px-4 bg-gray-50" 
      aria-labelledby="stats-heading"
    >
      <div className="container mx-auto">
        <h2 
          id="stats-heading"
          className="text-2xl sm:text-3xl font-bold text-center mb-3"
        >
          WHY REGISTER KARO
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Some Numbers are important
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={`stat-${index}`}
              number={stat.number} 
              label={stat.label} 
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(StatsSection);