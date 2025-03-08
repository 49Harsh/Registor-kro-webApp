import React from 'react';

const TrustedBySection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted By Over 100+ Startups and freelance business
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {/* Oracle Logo */}
          <div className="w-32 md:w-36">
            <svg viewBox="0 0 120 30" className="w-full">
              <path fill="#FF0000" d="M42.3,15c0-5.5-4.5-10-10-10H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h22.3C37.8,25,42.3,20.5,42.3,15z M21.2,20c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S23.9,20,21.2,20z"/>
              <path fill="#FF0000" d="M58.3,19.3c0-1.7-1.1-3.1-2.9-3.1c-1.8,0-2.9,1.4-2.9,3.1c0,1.7,1.1,3.1,2.9,3.1C57.2,22.4,58.3,21,58.3,19.3z M63.9,19.3c0,3.6-2.9,6.2-7,6.2c-4,0-7-2.7-7-6.2c0-3.6,2.9-6.2,7-6.2C60.9,13.1,63.9,15.7,63.9,19.3z"/>
              <path fill="#FF0000" d="M70.3,14.7c0-0.9-0.6-1.5-1.5-1.5c-0.9,0-1.5,0.6-1.5,1.5c0,0.9,0.6,1.5,1.5,1.5C69.7,16.2,70.3,15.6,70.3,14.7z M67.7,19.3v5.9h2.2v-5.9c0-0.8-0.1-1.7-0.2-2.5h2.3l0.2,1.3h0.1c0.5-0.9,1.5-1.6,2.7-1.6c2.1,0,3.2,1.5,3.2,3.9v4.8h-2.2v-4.5c0-1.4-0.5-2.2-1.5-2.2c-0.8,0-1.3,0.5-1.5,1.1c-0.1,0.2-0.1,0.5-0.1,0.8v4.9h-2.2v-5.9H67.7z"/>
              <path fill="#FF0000" d="M86.7,13.4l2.6,7c0.3,0.8,0.5,1.8,0.7,2.5h0.1c0.2-0.8,0.4-1.7,0.7-2.5l2.3-7h2.3l-4.7,11.7h-2.1l-4.5-11.7H86.7z"/>
              <path fill="#FF0000" d="M97.1,21.4c0.7,0.5,2,0.9,3.2,0.9c1.2,0,1.8-0.5,1.8-1.2s-0.5-1.1-1.9-1.6c-2.2-0.8-3.6-2-3.6-3.9c0-2.2,1.9-3.9,4.9-3.9c1.5,0,2.8,0.3,3.6,0.8l-0.7,2c-0.5-0.3-1.6-0.7-2.9-0.7c-1.1,0-1.7,0.5-1.7,1.1c0,0.7,0.6,1,2.1,1.6c2.1,0.8,3.4,1.9,3.4,3.9c0,2.2-1.7,4-5.2,4c-1.6,0-3.2-0.4-4-1L97.1,21.4z"/>
            </svg>
          </div>
          
          {/* Morpheus Logo (first instance) */}
          <div className="w-32 md:w-36">
            <svg viewBox="0 0 120 30" className="w-full">
              <circle cx="15" cy="15" r="12" fill="#2196F3" />
              <path d="M15,3C8.4,3,3,8.4,3,15s5.4,12,12,12s12-5.4,12-12S21.6,3,15,3z M15,25c-5.5,0-10-4.5-10-10S9.5,5,15,5s10,4.5,10,10S20.5,25,15,25z" fill="#0D47A1"/>
              <path d="M30,15L20,9v12L30,15z" fill="#2196F3"/>
              <text x="35" y="20" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#2196F3">MORPHEUS</text>
            </svg>
          </div>
          
          {/* Morpheus Logo (second instance) */}
          <div className="w-32 md:w-36">
            <svg viewBox="0 0 120 30" className="w-full">
              <circle cx="15" cy="15" r="12" fill="#2196F3" />
              <path d="M15,3C8.4,3,3,8.4,3,15s5.4,12,12,12s12-5.4,12-12S21.6,3,15,3z M15,25c-5.5,0-10-4.5-10-10S9.5,5,15,5s10,4.5,10,10S20.5,25,15,25z" fill="#0D47A1"/>
              <path d="M30,15L20,9v12L30,15z" fill="#2196F3"/>
              <text x="35" y="20" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#2196F3">MORPHEUS</text>
            </svg>
          </div>
          
          {/* Samsung Logo */}
          <div className="w-32 md:w-36">
            <svg viewBox="0 0 120 30" className="w-full">
              <path d="M11.9,8h7.5c4.9,0,7.4,2.4,7.4,7s-2.5,7-7.4,7h-7.5V8z M17.8,18.5c2.8,0,4.5-1.3,4.5-3.5s-1.7-3.5-4.5-3.5h-2.2v7H17.8z" fill="#1428A0"/>
              <path d="M31.9,8h3.7v14h-3.7V8z" fill="#1428A0"/>
              <path d="M45.8,13.3c-0.6-0.5-1.7-0.9-2.7-0.9c-1,0-1.8,0.3-1.8,1.1s0.8,1.1,1.7,1.3l1.1,0.2c2.3,0.4,3.8,1.7,3.8,3.8c0,3-2.5,4.3-5.4,4.3c-1.6,0-3.3-0.4-4.6-1.2l1.1-2.8c0.8,0.6,2.1,1.1,3.4,1.1c1.2,0,1.9-0.3,1.9-1.2s-0.8-1.1-1.9-1.3l-1.1-0.2c-2.2-0.4-3.7-1.8-3.7-3.8c0-2.9,2.4-4.1,5.1-4.1c1.5,0,3,0.3,4.1,1L45.8,13.3z" fill="#1428A0"/>
              <path d="M59.9,22h-3.5l-3.7-4.6H51v4.6h-3.7V8h7.3c3.5,0,5.7,1.8,5.7,4.7c0,2-1,3.4-2.8,4.1L59.9,22z M54.1,14.5c1.3,0,2.1-0.6,2.1-1.7S55.4,11,54.1,11h-3.1v3.5H54.1z" fill="#1428A0"/>
              <path d="M71.5,22h-9.8V8h9.8v3.3h-6.1v2h5.2v3.3h-5.2v2.2h6.1V22z" fill="#1428A0"/>
              <path d="M84.7,22h-3.5l-0.7-2.3h-5.3L74.5,22h-3.5l5.3-14h3.1L84.7,22z M79.5,16.7l-1.6-5.3h-0.1l-1.7,5.3H79.5z" fill="#1428A0"/>
              <path d="M95.1,22h-3.7l-2.3-8.5h-0.1L86.8,22h-3.7l-3.9-14h3.9l2.1,8.8h0.1l2.2-8.8h3.4l2.3,8.9h0.1l2.1-8.9h3.9L95.1,22z" fill="#1428A0"/>
            </svg>
          </div>
          
          {/* Monday.com Logo */}
          <div className="w-32 md:w-36">
            <svg viewBox="0 0 120 30" className="w-full">
              <path d="M15,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S16.7,12,15,12z" fill="#FF3D57"/>
              <path d="M26,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S27.7,12,26,12z" fill="#FF7E1D"/>
              <path d="M37,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S38.7,12,37,12z" fill="#FFCB00"/>
              <path d="M48,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S49.7,12,48,12z" fill="#00D647"/>
              <path d="M59,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S60.7,12,59,12z" fill="#0073EA"/>
              <path d="M70,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S71.7,12,70,12z" fill="#7B68EE"/>
              <path d="M81,12c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S82.7,12,81,12z" fill="#FF3D57"/>
              <text x="40" y="20" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#333">monday.com</text>
            </svg>
          </div>
          
          {/* Segment Logo */}
          <div className="w-32 md:w-36">
            <svg viewBox="0 0 120 30" className="w-full">
              <path d="M15,5c5.5,0,10,4.5,10,10s-4.5,10-10,10S5,20.5,5,15S9.5,5,15,5z M15,7c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S19.4,7,15,7z" fill="#35B779"/>
              <path d="M15,11c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S12.8,11,15,11z" fill="#35B779"/>
              <text x="35" y="20" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#35B779">segment</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;