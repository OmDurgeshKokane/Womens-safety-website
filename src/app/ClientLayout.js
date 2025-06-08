'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function ClientLayout({ children }) {
  // Disable animations on page load and ensure consistent styling
  useEffect(() => {
    // This ensures content appears in the center immediately without sliding animations
    document.documentElement.classList.add('disable-animations');
    
    // Remove the class after page is fully loaded with a small delay to ensure styles are applied
    const cleanup = () => {
      setTimeout(() => {
        document.documentElement.classList.remove('disable-animations');
      }, 300); // 300ms delay to ensure CSS is fully processed
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