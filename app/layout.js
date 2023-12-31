import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import './components/navbar.js'
import Navbar from './components/navbar.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kaan Portfolio',
  description: 'i am so super cool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}

