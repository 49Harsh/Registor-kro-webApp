import React from 'react';

const WhyChooseSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side content */}
        <div>
          <h3 className="text-amber-500 font-medium mb-2">WHY REGISTERKARO.IN</h3>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Register Karo</h1>
          
          <p className="text-gray-700 mb-6 leading-relaxed max-w-xl">
            It is with consistent services and results that build trust with the people and that in 
            turn help us to serve the business better.
          </p>
        </div>

        {/* Right side grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Confidential & Safe Card (top right) */}
          <div className="bg-red-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-red-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7zm0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Confidential & Safe</h2>
            <p className="text-gray-600">All your private information is safe with us</p>
          </div>

          {/* No Hidden Fee Card (top right) */}
          <div className="bg-green-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">No Hidden Fee</h2>
            <p className="text-gray-600">Everything is put before you with no hidden charges or conditions</p>
          </div>

          {/* Guaranteed Satisfaction Card (bottom left) */}
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-blue-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Guaranteed Satisfaction</h2>
            <p className="text-gray-600">We ensure that you stay 100% satisfied with our offered services</p>
          </div>

          {/* Expert CA/CS Assistance Card (bottom middle) */}
          <div className="bg-red-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-red-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3">Expert CA/CS Assistance</h2>
            <p className="text-gray-600">Prompt support from our in-house expert professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;