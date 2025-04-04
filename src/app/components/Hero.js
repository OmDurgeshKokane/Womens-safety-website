'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

// Using regular SVG components instead of heroicons
const PhoneIcon = (props) => (
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
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
    />
  </svg>
);

const ShieldCheckIcon = (props) => (
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
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
    />
  </svg>
);

const LightBulbIcon = (props) => (
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
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
    />
  </svg>
);

// SVG icon representing a woman
const WomanIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M12,2C9.24,2 7,4.24 7,7C7,9.76 9.24,12 12,12C14.76,12 17,9.76 17,7C17,4.24 14.76,2 12,2M12,4C13.66,4 15,5.34 15,7C15,8.66 13.66,10 12,10C10.34,10 9,8.66 9,7C9,5.34 10.34,4 12,4M12,14C9.66,14 5,15.17 5,17.5V20H19V17.5C19,15.17 14.34,14 12,14M12,16C14.22,16 17,17.03 17,17.5V18H7V17.5C7,17.03 9.78,16 12,16Z" />
  </svg>
);

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="title-line">{t['hero.yourSafety']}</span>
                <span className="subtitle-line">{t['hero.priority']}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 min-h-[3rem] md:min-h-[4rem]">
                {t['hero.subtitle']}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="rounded-md shadow">
                  <a
                    href="/emergency-contacts"
                    className="w-full flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-8"
                  >
                    {t['nav.emergencyContacts']}
                  </a>
                </div>
                <div className="sm:mt-0">
                  <a
                    href="/safety-tips"
                    className="w-full flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-3 md:text-lg md:px-8"
                  >
                    {t['nav.safetyTips']}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative overflow-hidden">
          {/* Using the women.jpg image */}
          <Image
            src="/images/women.jpg"
            alt="Women's safety"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            className="lg:rounded-l-lg"
          />
          
          {/* Content over the image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 sm:p-6 rounded-lg max-w-md mx-auto text-white">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <PhoneIcon className="h-6 w-6 sm:h-8 sm:w-8 icon-shadow" />
                <span className="text-base sm:text-xl font-bold text-shadow">{t['hero.emergencySupport']}</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <ShieldCheckIcon className="h-6 w-6 sm:h-8 sm:w-8 icon-shadow" />
                <span className="text-base sm:text-xl font-bold text-shadow">{t['hero.safetyGuidelines']}</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <LightBulbIcon className="h-6 w-6 sm:h-8 sm:w-8 icon-shadow" />
                <span className="text-base sm:text-xl font-bold text-shadow">{t['hero.defenseTips']}</span>
              </div>
            </div>
          </div>

          {/* Add style for text shadow */}
          <style jsx global>{`
            .text-shadow {
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 0px 0px 10px rgba(0, 0, 0, 0.7);
            }
            .icon-shadow {
              filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.9)) drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.7));
            }
          `}</style>
        </div>
      </div>
    </div>
  );
} 