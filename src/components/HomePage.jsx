import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">★</span>
            <span className="font-bold">Google Rating</span>
            <div className="ml-2 text-yellow-500">★★★★★</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Your trusted partner<br />
              for compliance business needs
            </h1>
            
            <div className="w-16 h-1 bg-gray-300 my-6"></div>
            
            <p className="text-lg text-gray-700 mb-8">
              An online business compliance platform that helps entrepreneurs and
              other individuals with various, <span className="font-semibold">registrations, tax filings</span>, and other <span className="font-semibold">legal
              matters</span>.
            </p>
            
            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row justify-start gap-8 sm:gap-12 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-600">
                    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-600">4.5+</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-600">
                    <circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="16" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M5 18H19" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-600">20,000+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-600">
                    <path d="M6 12L10 16L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 6H16M6 12H18M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-600">99.8%</div>
                  <div className="text-sm text-gray-600">Financial Stability</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded font-semibold transition-transform hover:scale-105">
                Talk An Expert
              </button>
              
              <button className="flex items-center text-gray-800 px-2 py-3 rounded font-semibold transition-transform hover:scale-105">
                <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" className="w-3 h-3">
                    <path d="M9 6L15 12L9 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                See how it works
              </button>
            </div>
          </div>
          
          {/* Right Column - Illustration */}
          <div className="w-full lg:w-1/2 relative">
            {/* Service Cards - Fixed positioning to match design */}
            <div className="absolute -right-4 lg:right-0 top-0 space-y-4 z-10 w-64 transform translate-x-1/4 md:translate-x-0">
              <div className="bg-white py-3 px-6 rounded-md shadow-lg text-center font-medium">
                Annual Compliance
              </div>
              <div className="bg-white py-3 px-6 rounded-md shadow-lg text-center font-medium">
                Payroll Services
              </div>
              <div className="bg-white py-3 px-6 rounded-md shadow-lg text-center font-medium">
                Company Formation
              </div>
              <div className="bg-white py-3 px-6 rounded-md shadow-lg text-center font-medium">
                Annual Compliance
              </div>
            </div>
            
            {/* Illustration */}
            <div className="relative h-96 sm:h-[450px] w-full max-w-md mx-auto">
              {/* Using a placeholder for the image */}
              <img 
                src="/landing-svg.png" 
                alt="Business compliance illustration" 
                className="w-full h-full object-contain"
              />
              
              {/* If image is not available, show a fallback */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Computer */}
                  <rect x="120" y="200" width="160" height="120" fill="#f0f0f0" rx="5" />
                  <rect x="140" y="220" width="120" height="80" fill="#e0e0e0" rx="2" />
                  
                  {/* Person */}
                  <circle cx="200" cy="150" r="30" fill="#faa34b" />
                  <rect x="170" y="180" width="60" height="80" fill="#faa34b" rx="5" />
                  <rect x="160" y="250" width="80" height="100" fill="#1a365d" rx="5" />
                  
                  {/* Search Icon */}
                  <circle cx="300" cy="120" r="40" fill="#f0f0f0" stroke="#e74c3c" strokeWidth="5" />
                  <path d="M330 150 L350 170" stroke="#e74c3c" strokeWidth="5" />
                  
                  {/* Target */}
                  <circle cx="350" cy="260" r="40" fill="none" stroke="#e74c3c" strokeWidth="5" />
                  <circle cx="350" cy="260" r="20" fill="none" stroke="#e74c3c" strokeWidth="5" />
                  <circle cx="350" cy="260" r="5" fill="#e74c3c" />
                  
                  {/* Plant */}
                  <rect x="420" y="240" width="30" height="40" fill="#4fd1c5" rx="5" />
                  <path d="M435 240 C435 230, 450 220, 435 210 C420 220, 435 230, 435 240" fill="#4fd1c5" />
                  <path d="M435 210 C435 200, 420 190, 435 180 C450 190, 435 200, 435 210" fill="#4fd1c5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;