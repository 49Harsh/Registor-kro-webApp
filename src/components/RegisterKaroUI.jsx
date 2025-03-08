import React, { useState, useCallback, memo } from 'react';
import { Menu, Phone, Mail, X } from 'lucide-react';

const SocialIcon = memo(({ href, ariaLabel, path }) => (
  <a href={href || "#"} aria-label={ariaLabel} className="transition-colors duration-200 hover:text-blue-600">
    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      {path}
    </svg>
  </a>
));

SocialIcon.displayName = 'SocialIcon';

const RegisterKaroUI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  // Predefine social icons for reuse
  const socialIcons = [
    {
      id: 'instagram',
      ariaLabel: 'Instagram',
      path: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    },
    {
      id: 'facebook',
      ariaLabel: 'Facebook',
      path: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.64c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.126-5.864 10.126-11.854z" />
    },
    {
      id: 'twitter',
      ariaLabel: 'Twitter',
      path: <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    },
    {
      id: 'pinterest',
      ariaLabel: 'Pinterest',
      path: <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    }
  ];

  // Navigation links for reuse
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Our Services', href: '#', hasDropdown: true },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact Us', href: '/contact' },
    { text: 'About us', href: '/about' }
  ];

  return (
    <header className="flex flex-col h-full will-change-transform">
      {/* Top Bar - Dark Blue with Contact Info */}
      <div className="hidden md:flex bg-blue-800 text-white py-2 px-4 justify-end items-center space-x-4">
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
          <a href="mailto:www.registerkaro.in" className="text-sm hover:underline">www.registerkaro.in</a>
        </div>
        <div className="border-r border-gray-400 h-4" aria-hidden="true"></div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
          <a href="tel:+918447746183" className="text-sm hover:underline">+91844774618</a>
        </div>
        <div className="border-r border-gray-400 h-4" aria-hidden="true"></div>
        <div className="flex items-center space-x-3">
          {socialIcons.map(icon => (
            <SocialIcon key={icon.id} ariaLabel={icon.ariaLabel} path={icon.path} />
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-3 sm:py-4 px-4 sm:px-6" aria-label="Main navigation">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" aria-label="RegisterKaro Home">
              <img 
                src="/imgss/logo.png" 
                alt="RegisterKaro Logo" 
                className="h-8 sm:h-10" 
                loading="lazy" 
                width="160" 
                height="40" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link, index) => (
              link.hasDropdown ? (
                <div key={`nav-${index}`} className="relative group">
                  <button className="text-gray-800 font-medium hover:text-orange-500 transition-colors duration-200 flex items-center">
                    {link.text}
                    <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ) : (
                <a 
                  key={`nav-${index}`} 
                  href={link.href} 
                  className="text-gray-800 font-medium hover:text-orange-500 transition-colors duration-200"
                >
                  {link.text}
                </a>
              )
            ))}
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200" aria-label="Search">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <a 
              href="/contact" 
              className="bg-orange-500 text-white px-4 py-2 rounded font-medium hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap"
            >
              Talk to an Expert
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={`mobile-nav-${index}`} 
                  href={link.href} 
                  className="text-gray-800 font-medium hover:text-orange-500 transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
              <div className="pt-4 flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border rounded-l focus:outline-none"
                  aria-label="Search box"
                />
                <button className="bg-gray-200 p-2 rounded-r border-t border-r border-b" aria-label="Submit search">
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <a 
                href="/contact" 
                className="bg-orange-500 text-white px-4 py-2 rounded font-medium text-center hover:bg-orange-600 transition-colors duration-200"
              >
                Talk to an Expert
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 mt-4">
                {socialIcons.map(icon => (
                  <SocialIcon 
                    key={`mobile-${icon.id}`} 
                    ariaLabel={icon.ariaLabel} 
                    path={icon.path} 
                  />
                ))}
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <div className="flex items-center text-blue-800">
                  <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                  <a href="mailto:www.registerkaro.in" className="text-sm hover:underline">www.registerkaro.in</a>
                </div>
                <div className="flex items-center text-blue-800">
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  <a href="tel:+918447746183" className="text-sm hover:underline">+91844774618</a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

// Add display name for better debugging in React DevTools
RegisterKaroUI.displayName = 'RegisterKaroUI';

// Use memo for performance optimization
export default memo(RegisterKaroUI);