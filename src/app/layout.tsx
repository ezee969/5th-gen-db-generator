import type { Metadata } from 'next';
// Components/ui
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Types
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'DB Generator',
  description: 'Descripcion',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col py-2 text-neutral-50'>
        <Header />
        <main className='grow py-3 pt-24'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
