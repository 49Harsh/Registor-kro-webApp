import React from 'react';

const AppDownloadSection = () => {
  return (
    <div className="w-full bg-blue-800 text-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Manage Your Services by your<br />
          Mobile Phone
        </h2>
        
        <p className="text-gray-200 mb-12 max-w-2xl">
          Download our app to manage and track your services. Our app
          enables you to stay in touch with our experts and aids you in tracking
          your progress.
        </p>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Get the App</h3>
          
          <div className="flex flex-wrap gap-4">
            {/* App Store Button */}
            <a href="#" className="inline-flex items-center bg-white text-black rounded-md px-4 py-2 hover:bg-gray-100 transition">
              <div className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-800">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div>
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            
            {/* Google Play Button */}
            <a href="#" className="inline-flex items-center bg-white text-black rounded-md px-4 py-2 hover:bg-gray-100 transition">
              <div className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current text-gray-800">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div>
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;