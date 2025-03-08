import React, { memo } from 'react';
import { ArrowUp } from 'lucide-react';

const SocialLink = memo(({ href, icon }) => (
  <a 
    href={href} 
    className="text-white hover:text-gray-300 transition-colors"
    aria-label={`Visit our ${href.replace('https://', '').replace('#', '')} page`}
  >
    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
      {icon}
    </div>
  </a>
));

const FooterColumn = memo(({ title, links }) => (
  <div className="md:col-span-1">
    <h2 className="text-orange-500 font-semibold text-lg mb-4">{title}</h2>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={`${title.toLowerCase()}-link-${index}`}>
          <a 
            href={link.href} 
            className="hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-blue-950 rounded px-1"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
));

const Footer = () => {
  const socialIcons = [
    {
      href: "#facebook",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    },
    {
      href: "#twitter",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.16-.4-.27-.11-.12-.2-.25-.26-.39-.06-.16-.09-.32-.09-.48 0-.16.03-.32.09-.48.06-.14.15-.27.26-.38.11-.12.24-.21.4-.28.15-.05.33-.08.52-.08.36 0 .69.12.94.37.25.25.37.56.37.91 0 .17-.03.33-.09.48-.06.14-.15.27-.26.39-.11.11-.24.21-.4.27-.15.05-.33.08-.52.08zm5.46-1.52c1.79.79 1.79 3.05 1.79 3.05s.49-.92-1.3-3.05zm-3.33-1.35c-.16-.06-.32-.1-.51-.1-.19 0-.34.04-.5.11-.15.07-.28.16-.38.27-.1.11-.17.23-.23.38-.05.15-.08.29-.08.44 0 .16.03.31.08.45.06.14.13.27.22.38.1.11.22.2.38.27.16.07.33.1.54.1.21 0 .38-.03.53-.1.15-.07.28-.16.38-.27.09-.1.17-.23.21-.37.05-.14.08-.3.08-.45 0-.15-.03-.29-.08-.44-.05-.14-.12-.27-.22-.38-.1-.11-.22-.2-.38-.27zm8.75 4.92c-.14-.28-.35-.54-.63-.78-.28-.24-.61-.47-1-.67-.39-.2-.83-.4-1.33-.57-.15-.05-.27-.09-.37-.13-.1-.03-.17-.08-.22-.13-.04-.05-.08-.1-.09-.16-.02-.06-.02-.13-.02-.21 0-.21.05-.39.14-.55.09-.16.22-.3.37-.42.15-.12.34-.23.54-.31.21-.08.42-.12.64-.12.34 0 .64.06.91.17.27.11.51.27.7.45.19.19.34.4.46.64.11.24.17.48.17.73h2.31c0-.75-.21-1.46-.62-2.11-.41-.65-.99-1.18-1.73-1.59-.74-.41-1.64-.62-2.69-.62-.58 0-1.13.08-1.66.23-.52.16-.99.38-1.38.67-.4.29-.71.64-.95 1.06-.24.42-.36.88-.36 1.41 0 .82.25 1.5.74 2.06.49.56 1.22.99 2.18 1.29-.25.09-.48.21-.67.36-.19.16-.35.33-.47.52-.12.19-.21.39-.26.6-.06.21-.08.42-.08.64 0 .85.32 1.57.96 2.15.64.58 1.58.87 2.8.87.69 0 1.32-.11 1.9-.34.58-.22 1.07-.55 1.47-.98.4-.43.71-.96.92-1.58.21-.62.32-1.32.32-2.09h-2.35c0 .41-.08.77-.24 1.09-.16.31-.38.57-.67.76-.29.19-.66.28-1.09.28-.37 0-.67-.07-.93-.2-.25-.14-.45-.33-.58-.56-.13-.24-.2-.5-.2-.79 0-.25.05-.49.14-.71.09-.21.24-.4.44-.56.2-.16.46-.36.77-.58.31-.22.65-.49 1.02-.81.36-.31.75-.68 1.16-1.09.4-.41.79-.89 1.16-1.44.36-.55.68-1.17.94-1.86.26-.69.38-1.46.38-2.31h-2.33c0 .36-.06.7-.18 1.05z"/>
      </svg>
    },
    {
      href: "#linkedin",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 20.28c-.98.58-2.04.9-3.05 1.05-.85.12-1.7.07-2.55-.05-.85-.11-1.7-.33-2.53-.56-1.58-.43-3.1-1.11-4.5-1.97-.7-.43-1.37-.91-1.95-1.47-.3-.28-.53-.57-.76-.86-.24-.28-.43-.57-.59-.87-.32-.58-.5-1.21-.53-1.85-.02-.32 0-.65.05-.96.07-.31.19-.62.38-.9.31-.45.84-.75 1.4-.74.24 0 .47.06.67.16.21.1.38.25.53.42.29.33.5.74.71 1.13.21.39.39.8.63 1.18.13.2.29.39.51.51.23.12.51.13.75.02.26-.11.46-.32.56-.58.1-.27.11-.55.06-.82-.1-.48-.35-.92-.65-1.31-.29-.39-.63-.76-1.02-1.07-.75-.6-1.68-.91-2.63-.85-.57.03-1.13.21-1.63.47-.5.27-.93.63-1.28 1.06-.35.42-.62.92-.78 1.44-.16.52-.22 1.06-.19 1.61.04.54.18 1.07.4 1.57.22.49.52.95.86 1.38.34.43.73.81 1.15 1.15.42.34.84.67 1.28.97.88.61 1.82 1.12 2.79 1.58 1.03.49 2.1.9 3.2 1.19.56.15 1.12.25 1.7.3.57.05 1.15.05 1.73-.02.57-.06 1.14-.19 1.68-.43.27-.12.53-.28.75-.48.22-.19.39-.44.47-.73.05-.16.06-.33.03-.5-.03-.16-.11-.31-.22-.44-.22-.25-.52-.4-.84-.45-.32-.05-.65 0-.96.1l-.59.22c-.31.12-.63.21-.96.27-.32.05-.65.07-.97.06-.64-.02-1.28-.14-1.89-.32-.61-.18-1.2-.42-1.75-.74-.28-.16-.54-.34-.78-.54-.24-.2-.47-.41-.66-.67-.19-.25-.34-.53-.39-.83-.04-.27.03-.52.16-.76.28-.48.88-.63 1.4-.46.29.09.54.24.8.38.26.15.53.28.81.39.57.22 1.18.35 1.8.42.61.07 1.24.05 1.84-.06.6-.11 1.18-.31 1.73-.58.55-.28 1.07-.63 1.5-1.07.43-.43.79-.95 1-1.53.21-.59.29-1.24.21-1.87-.08-.63-.31-1.22-.67-1.74-.71-1.05-1.77-1.82-2.91-2.32-.58-.25-1.17-.45-1.78-.59-.61-.15-1.24-.22-1.87-.25-.63-.02-1.27.01-1.9.09-.62.08-1.24.21-1.84.41-1.22.38-2.36.99-3.35 1.82-.5.41-.95.87-1.35 1.37-.4.5-.74 1.05-1.01 1.63-.28.58-.48 1.19-.59 1.83-.12.63-.17 1.29-.11 1.94.07.83.31 1.63.75 2.33.4.64.97 1.15 1.56 1.62 1.3 1.01 2.8 1.70 4.33 2.11.83.22 1.68.36 2.54.43.85.07 1.71.06 2.56-.03 1.71-.19 3.37-.71 4.86-1.61.3-.18.59-.38.87-.58.28-.21.55-.43.82-.66.27-.23.54-.46.82-.66.28-.21.59-.4.92-.48.33-.09.71-.08 1 .09.24.14.42.37.52.62.1.25.13.52.13.79-.01.33-.08.65-.2.95-.12.31-.3.6-.53.84-.83.86-1.88 1.44-2.97 1.79z"/>
      </svg>
    },
    {
      href: "#instagram",
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    }
  ];

  const footerColumns = [
    {
      title: "START A BUSINESS",
      links: [
        { href: "#features", text: "Features" },
        { href: "#solutions", text: "Solutions" },
        { href: "#integrations", text: "Integrations" },
        { href: "#enterprise", text: "Enterprise" },
        { href: "#solutions-alt", text: "Solutions" }
      ]
    },
    {
      title: "GOVERNMENT REGISTRATION",
      links: [
        { href: "#partners", text: "Partners" },
        { href: "#community", text: "Community" },
        { href: "#developers", text: "Developers" },
        { href: "#app", text: "App" },
        { href: "#blog", text: "Blog" }
      ]
    },
    {
      title: "COMPLIANCE & TAX",
      links: [
        { href: "#channels", text: "Channels" },
        { href: "#scale", text: "Scale" },
        { href: "#demo", text: "Watch the Demo" },
        { href: "#competition", text: "Our Competition" }
      ]
    },
    {
      title: "BIS & CDSCO",
      links: [
        { href: "#about", text: "About Us" },
        { href: "#news", text: "News" },
        { href: "#leadership", text: "Leadership" },
        { href: "#media-kit", text: "Media Kit" }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* First column - Branding */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-6">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </h3>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <SocialLink 
                  key={`social-${index}`} 
                  href={social.href} 
                  icon={social.icon} 
                />
              ))}
            </div>
          </div>
          
          {/* Dynamic column generation */}
          {footerColumns.map((column, index) => (
            <FooterColumn 
              key={`column-${index}`}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-12 mb-6">
          <button 
            className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-950 focus:ring-orange-500"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} aria-hidden="true" />
          </button>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-gray-400">© {new Date().getFullYear()} Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);