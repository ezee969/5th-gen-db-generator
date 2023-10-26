import type { Metadata } from 'next';
// Components/ui
import './globals.css';
import Header from './_components/layout/header';
import Footer from './_components/layout/footer';
// Types
import { ReactNode } from 'react';
// Provider

export const metadata: Metadata = {
  title: { default: 'DB Forge', template: '%s | DB Forge' },
  description:
    'Experience the future of database modeling with our Next.js page. Our 5th generation tool simplifies Sequelize database model creation for developers, making your coding journey more efficient and productive.',
  keywords: [
    'DB Forge',
    'Database',
    'Model creation',
    'Model management',
    'Sequelize',
    '5th Generation tool',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    // Para cuando se comparte el link de nuestra pagina en redes sociales por ejemplo, se muestra la imagen y el titulo que nosotros queramos
    type: 'website',
    locale: 'en_US',
    url: 'http://localhost:3000',
    title: 'DB Forge',
    description:
      'Experience the future of database modeling with our Next.js page. Our 5th generation tool simplifies Sequelize database model creation for developers, making your coding journey more efficient and productive.',
    images: [
      {
        url: 'https://www.example.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DB Forge',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col py-2'>
        <Header />
        <main className='grow bg-slate-900 py-3 pt-24'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
