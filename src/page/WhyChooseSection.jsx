import React from 'react';

const WhyChooseSection = () => {
  // Pre-define card data for better performance and maintainability
  const featureCards = [
    {
      id: 'confidential',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
      title: 'Confidential & Safe',
      description: 'All your private information is safe with us',
      icon: (
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7zm0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3z" />
      )
    },
    {
      id: 'no-hidden-fee',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      title: 'No Hidden Fee',
      description: 'Everything is put before you with no hidden charges or conditions',
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      )
    },
    {
      id: 'guaranteed-satisfaction',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      title: 'Guaranteed Satisfaction',
      description: 'We ensure that you stay 100% satisfied with our offered services',
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      )
    },
    {
      id: 'expert-assistance',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500',
      title: 'Expert CA/CS Assistance',
      description: 'Prompt support from our in-house expert professionals',
      icon: (
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      )
    },
   
  ];
  const card = [
    {
      id: 'transparent-services',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500',
      title: 'Transparent Services',
      description: 'Complete transparency in all our business dealings and services',
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm0 2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
      )
    }
  ]

  return (
    <section 
      className="why-choose-section container mx-auto px-4 sm:px-6 lg:px-14 py-8 sm:py-10 lg:py-12" 
      aria-labelledby="why-choose-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className='flex flex-col gap-4 sm:gap-6'>
          {/* Left side content */}
          <div>
            <h3 className="text-amber-500 font-medium mb-2">WHY REGISTERKARO.IN</h3>
            <h1 id="why-choose-heading" className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Why Choose Register Karo</h1>
            
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed max-w-xl">
              It is with consistent services and results that build trust with the people and that in 
              turn help us to serve the business better.
            </p>
          </div>

          {/* left 1 card */}
          <div className='flex justify-center md:justify-end pt-4 sm:pt-6 md:pt-10 h-auto sm:h-[220px] md:h-[260px]'>
            {card.map((card) => (
              <div 
                key={card.id}
                className={`${card.bgColor} rounded-xl w-full sm:w-[70%] md:w-[60%] lg:w-[50%] p-4 sm:p-6 flex flex-col items-center text-center transition-transform hover:scale-105 will-change-transform`}
              >
                <div className={`${card.iconColor} mb-3 sm:mb-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {card.icon}
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{card.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
       
        {/* Right side grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Render all feature cards from the array */}
          {featureCards.map((card) => (
            <div 
              key={card.id}
              className={`${card.bgColor} rounded-xl p-4 sm:p-6 flex flex-col items-center text-center transition-transform hover:scale-105 will-change-transform`}
            >
              <div className={`${card.iconColor} mb-3 sm:mb-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {card.icon}
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{card.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add display name for better debugging in React DevTools
WhyChooseSection.displayName = 'WhyChooseSection';

// Use React.memo for performance optimization
export default React.memo(WhyChooseSection);