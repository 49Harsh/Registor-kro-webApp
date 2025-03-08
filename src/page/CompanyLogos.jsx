import React from 'react';

const CompanyLogos = () => {
  // Array of company names for the placeholders
  const companies = ["coinbase", "spotify", "slack", "dropbox", "webflow", "zoom"];

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div key={company} className="w-32 md:w-36 lg:w-40">
              {/* This empty div is where you can add your images */}
              {/* You can replace this with an <img> tag */}
              <div className="w-full h-12 flex items-center justify-center">
                {/* Image will go here */}
                <h2>{company}</h2>
              </div>
            </div>


            
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;



{/* <div key={company} className="w-32 md:w-36 lg:w-40">
  <img 
    src={`/path/to/${company}-logo.png`} 
    alt={`${company} logo`}
    className="w-full"
  />
</div> */}