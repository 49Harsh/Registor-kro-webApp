import React from 'react';


const TrustedBySection = () => {
  // Company data array using imported images
  const companies = [
    { id: 1, name: 'Oracle', logo: "/imgss/oracle.png" },
    { id: 2, name: 'Morpheus', logo: "/imgss/mrp.png" },
    { id: 3, name: 'Samsung', logo: "/imgss/sumsung.png" },
    { id: 4, name: 'Monday.com', logo: "/imgss/monday.png" },
    { id: 5, name: 'Segment', logo: "/imgss/segment.png" },
  ];

  return (
    <section 
      className="py-12 bg-white" 
      aria-labelledby="trusted-by-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="trusted-by-heading"
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Trusted By Over 100+ Startups and freelance business
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div key={company.id} className="w-32 md:w-36 logo-container">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;