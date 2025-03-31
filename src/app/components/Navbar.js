'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Safety Tips', href: '/safety-tips' },
    { name: 'Emergency Contacts', href: '/emergency-contacts' },
    { name: 'Self Defense', href: '/self-defense' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" prefetch={true} className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Women's Safety
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={true}
                    className={`nav-link inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
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
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-2">
              <a href="tel:112" className="emergency-button">
                Emergency: 112
              </a>
              <a href="tel:181" className="emergency-button">
                Women: 181
              </a>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
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
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                className={`nav-link block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
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
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
            <a href="tel:112" className="emergency-button w-full block text-center">
              Emergency: 112
            </a>
            <a href="tel:181" className="emergency-button w-full block text-center">
              Women's Helpline: 181
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 