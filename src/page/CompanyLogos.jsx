import React, { memo } from 'react';

const LogoImage = memo(({ name, src }) => (
  <div className="flex items-center justify-center p-4 transition-transform hover:scale-105">
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      width="120"
      height="40"
      className="h-8 w-auto object-contain"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/imgss/placeholder-logo.png";
        console.log(`Failed to load ${name} logo`);
      }}
    />
  </div>
));

const CompanyLogos = () => {
  // Restructured for easier maintenance and better performance
  const companies = [
    { name: "coinbase", src: "/imgss/coinbase.png" },
    { name: "spotify", src: "/imgss/spotify.png" },
    { name: "slack", src: "/imgss/slack.png" },
    { name: "dropbox", src: "/imgss/dropbox.png" },
    { name: "webflow", src: "/imgss/webflow.png" },
    { name: "zoom", src: "/imgss/zoom.png" }
  ];

  return (
    <section 
      className="w-full py-12 bg-white" 
      aria-labelledby="partners-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          id="partners-heading" 
          className="text-center text-xl font-semibold text-gray-800 mb-8 md:mb-10"
        >
          Trusted by Industry Leaders
        </h2>
        
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6" 
          role="list" 
          aria-label="Company logos"
        >
          {companies.map((company) => (
            <LogoImage 
              key={company.name} 
              name={company.name} 
              src={company.src} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(CompanyLogos);