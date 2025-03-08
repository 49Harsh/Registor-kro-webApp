import React, { memo } from 'react';

const AboutPage = () => {
  // Generating dots array once outside the render for better performance
  const dots = Array(25).fill(0).map((_, i) => ({
    top: `${Math.floor(i/5) * 20}%`,
    right: `${(i%5) * 20}%`
  }));

  return (
    <section id="about" className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left content */}
        <div className="w-full lg:w-1/2 pr-0 ml-14 lg:pr-8">
          <h3 className="text-amber-500 font-medium mb-2">WELCOME TO REGISTERKARO.IN</h3>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-800">About </span>
            <span className="text-amber-500">Register Karo</span>
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            We have been using Intelegencia as our DevOps vendor for our field service 
            applications over the last couple of years and I'm extremely pleased with 
            their performance, ability to execute, and willingness to adapt in our ever changing 
            environment. Perry is an outstanding leader who is fanatical about 
            customer satisfaction. He has built a solid team which has consistently delivered 
            on projects thereby exceeding everyone's expectations.
          </p>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            I would strongly recommend their services to any organization that is looking for 
            solid, reliable, and predictable outcomes.
          </p>
          
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-medium rounded hover:bg-blue-900 transition-colors"
            aria-label="Learn more about Register Karo"
          >
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        {/* Right image with decorative elements */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          {/* Orange curved shape on the right */}
          <div className='absolute hidden md:block -right-4  -top-10'>
            <img
              src='/Vector.png'
              alt=""
              loading="lazy"
              width="50"
              height="50"
              aria-hidden="true"
              className='z-50'
            />
          </div>
          
          {/* Dotted pattern */}
          <div className="absolute right-0 bottom-0 w-32 h-32 hidden lg:block" style={{ zIndex: 1 }}>
            <div className="w-full h-full relative">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-amber-100 rounded-full opacity-50"></div>
              {dots.map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-amber-500"
                  style={{
                    top: pos.top,
                    right: pos.right,
                    zIndex: 2
                  }}
                  aria-hidden="true"
                ></div>
              ))}
            </div>
          </div>
          
          {/* Image container with border radius */}
          <div className="rounded-2xl overflow-hidden border-4 border-amber-100 relative z-10 mx-auto lg:mr-12 max-w-xl lg:max-w-none shadow-lg">
            <img
              src="/student.png"
              alt="RegisterKaro Team"
              className="w-full h-auto object-cover"
              loading="lazy"
              width="600"
              height="400"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutPage);