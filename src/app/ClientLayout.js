'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function ClientLayout({ children }) {
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