import React from 'react';
import { memo } from 'react';

// SVG components extracted to prevent re-renders
const CompanyFormationIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
));

const SecretarialServicesIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
));

const VirtualOfficeIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
));

const ComplianceServicesIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
));

const PayrollServicesIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
));

const BookkeepingServicesIcon = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
));

// Reusable LearnMore component for consistency
const LearnMoreLink = memo(({ href = "#", text = "Learn more" }) => (
  <a 
    href={href} 
    className="inline-flex items-center text-gray-700 font-medium"
    aria-label={`${text} about this service`}
  >
    {text} 
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
    </svg>
  </a>
));

// Service card component for consistent rendering
const ServiceCard = memo(({ title, description, icon, hasRightBar = false, barPosition = "top-1/2" }) => (
  <div className="border p-6 rounded-lg text-center relative">
    <div className="flex justify-center mb-6">
      <div className="text-amber-500">
        {icon}
      </div>
    </div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    <LearnMoreLink />
    {hasRightBar && <div className={`absolute right-0 ${barPosition} h-16 w-0.5 bg-red-500 hidden md:block`}></div>}
  </div>
));

// Main services data to easily manage content
const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: <CompanyFormationIcon />,
    hasRightBar: true,
    barPosition: "top-1/2"
  },
  {
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    icon: <SecretarialServicesIcon />,
    hasRightBar: false
  },
  {
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    icon: <VirtualOfficeIcon />,
    hasRightBar: true,
    barPosition: "bottom-1/4"
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    icon: <ComplianceServicesIcon />,
    hasRightBar: true,
    barPosition: "top-1/2"
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: <PayrollServicesIcon />,
    hasRightBar: false
  },
  {
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology.",
    icon: <BookkeepingServicesIcon />,
    hasRightBar: true,
    barPosition: "bottom-1/4"
  }
];

const ServicesPage = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <section aria-labelledby="services-heading">
        <div className="text-center mb-12">
          <h3 className="text-amber-500 font-medium mb-2">WELCOME TO REGISTERKARO.IN</h3>
          <h1 id="services-heading" className="text-4xl font-bold text-gray-800">Explore Our Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={`service-${index}`}
              title={service.title}
              description={service.description}
              icon={service.icon}
              hasRightBar={service.hasRightBar}
              barPosition={service.barPosition}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-blue-800 text-white font-medium rounded hover:bg-blue-900 transition-colors"
            aria-label="View all services offered by RegisterKaro"
          >
            See All Services
          </a>
        </div>
      </section>
    </main>
  );
};

export default memo(ServicesPage);