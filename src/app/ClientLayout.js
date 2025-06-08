'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function ClientLayout({ children }) {
  // Disable animations on page load
  useEffect(() => {
    // This ensures content appears in the center immediately without sliding animations
    document.documentElement.classList.add('disable-animations');
    
    // Remove the class after page is fully loaded
    const cleanup = () => {
      document.documentElement.classList.remove('disable-animations');
    };
    
    window.addEventListener('load', cleanup);
    return () => window.removeEventListener('load', cleanup);
  }, []);
  
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
} 