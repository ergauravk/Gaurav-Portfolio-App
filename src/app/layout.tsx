import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Gaurav-portfolio',
  description: 'Enthusiastic Java Developer with a strong foundation in Java, Hibernate, JDBC, Servlets, and React.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            if (typeof window !== 'undefined' && window.matchMedia) {
              var proto = window.MediaQueryList && window.MediaQueryList.prototype;
              if (proto && !proto.addListener) {
                proto.addListener = function(cb) { this.addEventListener('change', cb); };
                proto.removeListener = function(cb) { this.removeEventListener('change', cb); };
              }
            }
          })();
        `}} />
</head>
      <body>
        {children}
      </body>
    </html>
  );
}
