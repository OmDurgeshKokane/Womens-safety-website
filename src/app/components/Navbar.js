'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggler from './LanguageToggler';
import LocationSharing from './LocationSharing';

// Creating SVG icons instead of using heroicons
const Bars3Icon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 6h16M4 12h16M4 18h16" 
    />
  </svg>
);

const XMarkIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  const navigation = [
    { name: t['nav.home'], href: '/' },
    { name: t['nav.safetyTips'], href: '/safety-tips' },
    { name: t['nav.emergencyContacts'], href: '/emergency-contacts' },
    { name: t['nav.selfDefense'], href: '/self-defense' },
    { name: t['nav.resources'], href: '/resources' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 lg:px-4">
        {/* Main navbar - visible on all devices */}
        <div className="flex justify-between items-center h-16">
          {/* Site title - visible on all devices */}
          <Link 
            href="/" 
            prefetch={true}
            onClick={() => setIsOpen(false)}
            className="flex-shrink-0"
          >
            {/* Single title for all device sizes */}
            <span className="site-title">
              {t['hero.title']}
            </span>
          </Link>

          {/* Desktop Navigation - only visible on large screens */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full lg:ml-2 xl:ml-10">
            <div className="flex items-center flex-shrink-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={true}
                    className={`inline-flex items-center px-2 py-2 border-b-2 text-sm font-medium whitespace-nowrap mx-0.5 xl:mx-1 ${
                      isActive 
                        ? 'border-blue-500 text-gray-900 dark:text-white' 
                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            
            {/* Desktop utilities */}
            <div className="flex items-center space-x-2 xl:space-x-3 flex-shrink-0 ml-1">
              <LocationSharing compactDesktop={true} />
              <LanguageToggler />
              <div className="flex space-x-2 xl:space-x-3">
                <a 
                  href="tel:112" 
                  className="emergency-button"
                  aria-label="Emergency: 112"
                >
                  {t['emergency.main']}
                </a>
                <a 
                  href="tel:181" 
                  className="emergency-button"
                  aria-label="Women Helpline: 181"
                >
                  {t['emergency.women']}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet controls - location sharing, language toggle and hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <LocationSharing iconOnly={true} />
            <LanguageToggler />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet menu - only visible when hamburger is clicked */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive 
                    ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-700 dark:bg-gray-700 dark:text-blue-400' 
                    : 'text-gray-700 border-l-4 border-transparent dark:text-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Emergency buttons in mobile menu */}
          <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="px-3 space-y-3">
              <a 
                href="tel:112" 
                className="block w-full text-center py-2 px-4 rounded-md bg-red-500 text-white font-medium hover:bg-red-600"
                aria-label="Emergency: 112"
              >
                {t['emergency.main']}
              </a>
              <a 
                href="tel:181" 
                className="block w-full text-center py-2 px-4 rounded-md bg-red-500 text-white font-medium hover:bg-red-600"
                aria-label="Women Helpline: 181"
              >
                {t['emergency.helpline']}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 