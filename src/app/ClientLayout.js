'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
} 