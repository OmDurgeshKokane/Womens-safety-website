import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from './ClientLayout';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Women's Safety Guide",
  description: "Essential safety guidelines, self-care tips, and emergency contacts for women's safety",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="anti-inspect" strategy="beforeInteractive">
          {`
            // Disable right click
            document.addEventListener('contextmenu', (e) => e.preventDefault());

            // Disable keyboard shortcuts
            document.addEventListener('keydown', (e) => {
              // Disable F12
              if (e.key === 'F12') {
                e.preventDefault();
              }
              // Disable Ctrl+Shift+I
              if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
              }
              // Disable Ctrl+Shift+J
              if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
              }
              // Disable Ctrl+Shift+C
              if (e.ctrlKey && e.shiftKey && e.key === 'C') {
                e.preventDefault();
              }
              // Disable Ctrl+U
              if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
              }
            });

            // Disable text selection
            document.addEventListener('selectstart', (e) => e.preventDefault());
            document.addEventListener('dragstart', (e) => e.preventDefault());

            // Disable view source
            document.addEventListener('keydown', (e) => {
              if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
              }
            });

            // Developer tools detection without redirect
            let devtools = {
              isOpen: false,
              orientation: undefined
            };

            const threshold = 160;

            const emitEvent = (isOpen, orientation) => {
              window.dispatchEvent(new CustomEvent('devtoolschange', {
                detail: {
                  isOpen,
                  orientation
                }
              }));
            };

            const main = ({emitEvents = true} = {}) => {
              const widthThreshold = window.outerWidth - window.innerWidth > threshold;
              const heightThreshold = window.outerHeight - window.innerHeight > threshold;

              if (
                !(heightThreshold && widthThreshold) &&
                ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
              ) {
                if (!devtools.isOpen || devtools.orientation !== undefined) {
                  devtools.isOpen = true;
                }
              } else {
                if (devtools.isOpen) {
                  devtools.isOpen = false;
                }
              }

              if (emitEvents) {
                emitEvent(devtools.isOpen, devtools.orientation);
              }
            };

            main({emitEvents: false});
            setInterval(main, 1000);
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
