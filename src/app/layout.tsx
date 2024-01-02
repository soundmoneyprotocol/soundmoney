import React from 'react';
import './global.css';
import { AppNavBar } from '@/components/navigation';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  display: 'swap',
});

const druk = localFont({
  src: '../lib/fonts/Druk/Druk Wide-Super-Web.woff2',
  display: 'swap',
  variable: '--font-druk',
});

const gilroy = localFont({
  src: '../lib/fonts/Gilroy/GilroyExtraBold/font.woff2',
  display: 'swap',
  variable: '--font-gilroy',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${druk.variable} ${gilroy.variable} ${mont.className}`}
    >
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='absolute inset-x-0 top-0 z-50'>
        <AppNavBar />
      </header>
      <main>{children}</main>
      <footer className='md:px-40 px-10 flex justify-between text-sm mt-20 pb-8'>
        <p>© 2021 360NFT</p>
        <Link href={'/'} className='text-blue-500 hover:text-blue-600'>
          Terms & conditions
        </Link>
      </footer>
    </>
  );
}