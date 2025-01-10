import React from 'react';
import './global.css';
import { AppNavBar } from '@/components/navigation';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

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
export const metadata: Metadata = {
  // viewport: { width: 'device-width', initialScale: 1 },
  title: {
    default: 'SoundMoney',
    template: '%s | SoundMoney',
  },
  description:
    'SoundMoney is a new direct-to-fan channel built on Bitcoin that allows Creatives to retain the majority of their profits while allowing their audience to invest in them.  - Our Business Model offers New music access and experiences - that can be accessed via artist tokens. -It does all of this while helping users earn in Bitcoin!',
  keywords:
    'Crypto Beats, Blockchain Harmony, Decentralized Soundwaves, Crypto Grooves, FairPlay Music, Artist Empowerment Hub, Transparent Tunescapes, CryptoTunes Revolution, Peer-to-Peer Melodies, Web2.5 Sonic Experience, CryptoSounds Hub, Seamless Rhythms, EmpowerArt Beats, EmpowerArt Beats, Digital Audio Freedom, CryptoWave Jams, Harmony in Blockchain, EmpowerArt Beats, NxtLevel Music Stream Decentralized Vibes, FairNotes Streaming, Web2.5, Bitcoin, Web3, Trapchain inc.',
  twitter: {
    title: 'SoundMoney',
    card: 'summary_large_image',
    description:
      'SoundMoney is a new direct-to-fan channel built on Bitcoin that allows Creatives to retain the majority of their profits while allowing their audience to invest in them.  - Our Business Model offers New music access and experiences - that can be accessed via artist tokens. -It does all of this while helping users earn in Bitcoin!',
    site: '@soundmoneyxyz',
    creator: '@SoundMoneyProtocol',
    images: '/images/home/base_d.jpg',
  },
  openGraph: {
    type: 'website',
    url: 'https://soundmoneyprotocol.xyz',
    title: 'SoundMoney',
    description:
      'SoundMoney is a new direct-to-fan channel built on Bitcoin that allows Creatives to retain the majority of their profits while allowing their audience to invest in them.  - Our Business Model offers New music access and experiences - that can be accessed via artist tokens. -It does all of this while helping users earn in Bitcoin!',
    siteName: 'SoundMoney',
    images: [
      {
        url: '/images/home/base_d.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
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
      <header className="md:fixed inset-x-0 top-0 z-50">
        <AppNavBar />
      </header>
      <main>{children}</main>
      <footer className="md:px-40 px-5 flex justify-between text-sm py-5 md:fixed bottom-0 w-full bg-white">
        <p>© {new Date().getFullYear()} SoundMoney</p>
        <div className="flex gap-x-4">
          <Link href={'/docs'} className="text-blue-600 hover:text-blue-500">
            Docs
          </Link>
          <Link href={'/swap'} className="text-blue-600 hover:text-blue-500">
            Swap
          </Link>
          <Link href={'/saga'} className="text-blue-600 hover:text-blue-500">
            Saga
          </Link>

          <Link
            href={'/profile/solarah'}
            className="text-blue-600 hover:text-blue-500 text-sm md:text-base"
          >
            Demo
          </Link>
          {/* <Link href={'/privacy'} className='text-blue-500 hover:text-blue-600'>
          Privacy Policy
        </Link> */}
          <Link
            href={'/bezy'}
            className="text-blue-600 hover:text-blue-500 text-sm md:text-base"
          >
            Bezy
          </Link>
          <Link
            href={'/play'}
            className="text-blue-600 hover:text-blue-500 text-sm md:text-base"
          >
            Play
          </Link>
          {/* <Link
            href={'/wallet'}
            className="text-blue-600 hover:text-blue-500 text-sm md:text-base"
          >
            Wallet
          </Link> */}
        </div>
      </footer>
    </>
  );
}
