import React, { memo } from 'react';
import './index.css';

// Extracting SVG components to avoid re-rendering
const StatIcon1 = memo(() => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-600">
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
  </svg>
));

const StatIcon2 = memo(() => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-600">
    <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M5 18H19" stroke="currentColor" strokeWidth="2" />
  </svg>
));

const StatIcon3 = memo(() => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-600">
    <path d="M6 12L10 16L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6H16M6 12H18M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
));

const PlayIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-3 h-3">
    <path d="M9 6L15 12L9 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));

// Extracted service cards component
const ServiceCards = memo(() => (
  <div className="absolute hidden md:block -right-4 lg:right-0 top-0 space-y-4 z-10 w-64 transform translate-x-1/4 md:translate-x-0">
    {['Annual Compliance', 'Payroll Services', 'Company Formation', 'Annual Compliance'].map((service, index) => (
      <div key={`service-${index}`} className="bg-white py-3 px-6 rounded-md shadow-lg text-center font-medium">
        {service}
      </div>
    ))}
  </div>
));

// Mobile service cards for small screens
const MobileServiceCards = memo(() => (
  <div className="grid grid-cols-2 gap-3 mb-6 sm:hidden">
    {['Annual Compliance', 'Payroll Services', 'Company Formation', 'Tax Filing'].map((service, index) => (
      <div key={`mobile-service-${index}`} className="bg-white py-2 px-3 rounded-md shadow text-center font-medium text-sm">
        {service}
      </div>
    ))}
  </div>
));

// Extracted fallback SVG
const FallbackIllustration = memo(() => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <rect x="120" y="200" width="160" height="120" fill="#f0f0f0" rx="5" />
    <rect x="140" y="220" width="120" height="80" fill="#e0e0e0" rx="2" />
    <circle cx="200" cy="150" r="30" fill="#faa34b" />
    <rect x="170" y="180" width="60" height="80" fill="#faa34b" rx="5" />
    <rect x="160" y="250" width="80" height="100" fill="#1a365d" rx="5" />
    <circle cx="300" cy="120" r="40" fill="#f0f0f0" stroke="#e74c3c" strokeWidth="5" />
    <path d="M330 150 L350 170" stroke="#e74c3c" strokeWidth="5" />
    <circle cx="350" cy="260" r="40" fill="none" stroke="#e74c3c" strokeWidth="5" />
    <circle cx="350" cy="260" r="20" fill="none" stroke="#e74c3c" strokeWidth="5" />
    <circle cx="350" cy="260" r="5" fill="#e74c3c" />
    <rect x="420" y="240" width="30" height="40" fill="#4fd1c5" rx="5" />
    <path d="M435 240 C435 230, 450 220, 435 210 C420 220, 435 230, 435 240" fill="#4fd1c5" />
    <path d="M435 210 C435 200, 420 190, 435 180 C450 190, 435 200, 435 210" fill="#4fd1c5" />
  </svg>
));

// Stat item component
const StatItem = memo(({ icon: Icon, value, label }) => (
  <div className="flex items-center">
    <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3 flex-shrink-0">
      <Icon />
    </div>
    <div>
      <div className="text-lg sm:text-xl font-bold text-amber-600">{value}</div>
      <div className="text-xs sm:text-sm text-gray-600">{label}</div>
    </div>
  </div>
));

// Main HomePage component with React.memo for performance
const HomePage = memo(() => {
  // Stats data
  const stats = [
    { icon: StatIcon1, value: '4.5+', label: 'Customer Rating' },
    { icon: StatIcon2, value: '20,000+', label: 'Clients' },
    { icon: StatIcon3, value: '99.8%', label: 'Financial Stability' }
  ];

  return (
    <div className="background-gradient-detailed min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 min-w-screen to-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto py-4 sm:py-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-8">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1 sm:mr-2">★</span>
            <span className="font-bold text-sm sm:text-base">Google Rating</span>
            <div className="ml-1 sm:ml-2 text-yellow-500">★★★★★</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Mobile Illustration (showing above text on small screens) */}
          <div className="w-full lg:hidden relative mb-6">
            <div className="relative h-64 sm:h-80 w-full max-w-xs mx-auto">
              <img 
                src="/landing-svg.png" 
                alt="Business compliance illustration" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0">
                <FallbackIllustration />
              </div>
            </div>
          </div>

          {/* Mobile Service Cards for small screens */}
          <MobileServiceCards />

          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 text-center sm:text-left">
              Your trusted partner<br className="hidden sm:block" />
              for compliance business needs
            </h1>
            
            <div className="w-16 h-1 bg-gray-300 my-4 sm:my-6 mx-auto sm:mx-0"></div>
            
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center sm:text-left">
              An online business compliance platform that helps entrepreneurs and
              other individuals with various, <span className="font-semibold">registrations, tax filings</span>, and other <span className="font-semibold">legal
              matters</span>.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <StatItem 
                  key={`stat-${index}`} 
                  icon={stat.icon} 
                  value={stat.value} 
                  label={stat.label} 
                />
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <button className="bg-blue-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold transition-transform hover:scale-105 text-sm sm:text-base w-full xs:w-auto">
                Talk An Expert
              </button>
              
              <button className="flex items-center justify-center text-gray-800 px-2 py-2 sm:py-3 rounded font-semibold transition-transform hover:scale-105 text-sm sm:text-base w-full xs:w-auto">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                  <PlayIcon />
                </span>
                See how it works
              </button>
            </div>
          </div>
          
          {/* Right Column - Illustration (hidden on small screens, visible on lg and above) */}
          <div className="hidden lg:block w-full lg:w-1/2 relative">
            {/* Service Cards */}
            <ServiceCards />
            
            {/* Illustration */}
            <div className="relative h-96 sm:h-[450px] w-full max-w-md mx-auto">
              <img 
                src="/landing-svg.png" 
                alt="Business compliance illustration" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0">
                <FallbackIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomePage;