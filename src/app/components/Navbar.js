'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggler from './LanguageToggler';

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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                prefetch={true} 
                className="site-title font-bold" 
                onClick={() => setIsOpen(false)}
              >
                {t['hero.title']}
              </Link>
            </div>
            <div className="hidden md:ml-4 lg:ml-6 md:flex md:flex-wrap md:items-center md:gap-x-2 lg:gap-x-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={true}
                    className={`nav-link inline-flex items-center px-1 py-1 text-xs lg:text-sm font-medium border-b-2 whitespace-nowrap ${
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
          </div>
          <div className="hidden md:flex md:items-center md:space-x-2">
            <LanguageToggler />
            <div className="flex flex-wrap gap-2 navbar-emergency-buttons">
              <a 
                href="tel:112" 
                className="emergency-button whitespace-nowrap"
                aria-label="Emergency: 112"
              >
                {t['emergency.main']}
              </a>
              <a 
                href="tel:181" 
                className="emergency-button whitespace-nowrap"
                aria-label="Women Helpline: 181"
              >
                {t['emergency.women']}
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3 md:hidden ml-auto">
            {/* Mobile language toggler between title and hamburger */}
            <div className="md:hidden">
              <LanguageToggler />
            </div>
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

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                className={`nav-link block pl-3 pr-4 py-2 text-sm font-medium border-l-4 ${
                  isActive 
                    ? 'border-blue-500 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-gray-700' 
                    : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2 flex flex-col space-y-2 navbar-emergency-buttons">
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
                {t['emergency.helpline']}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 