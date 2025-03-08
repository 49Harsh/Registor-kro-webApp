import React from 'react';

const VideoIntroductions = () => {
  return (
    <div className="bg-blue-950 h-full w-full p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left Section: Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Our Video Introductions</h1>
            
            <p className="text-gray-300 mb-10">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-4 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white text-xl font-semibold mb-2">Explore ideas together</h2>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-4 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white text-xl font-semibold mb-2">Bring those ideas to life</h2>
                  <p className="text-gray-300">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section: Video */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden w-full pt-[56.25%]">
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="/yt-girl.png" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover"
                />
                
                {/* YouTube play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 w-16 h-12 flex items-center justify-center rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12V8l4 2-4 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntroductions;