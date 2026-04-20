'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, X, MessageCircle, Twitter } from 'lucide-react';

export const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuVariants = {
    hidden: { y: '-100%' },
    visible: { y: 0 },
    exit: { y: '-100%' },
  };

  return (
    <nav className="flex items-center justify-between p-4 lg:px-8 w-full bg-[#AFB3B599]">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <img
            className="md:h-8 md:w-auto w-32 backdrop-blur-[1px]"
            src="/images/sound-logo.svg"
            alt="SoundMoney"
          />
        </Link>
      </div>

      <div className="flex md:gap-x-4 gap-x-2 items-center">
        <div className="hidden md:flex gap-x-5 items-center">
        </div>
        <button onClick={() => setIsOpen(true)} className="w-[68px] h-[26px] flex flex-col justify-between">
          <span className="w-full bg-black border-b-2 border-black" />
          <span className="w-full bg-black border-b-2 border-black" />
          <span className="w-full bg-black border-b-2 border-black" />
        </button>
      </div>

      {/* === DESKTOP MENU === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="desktop-menu"
            className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-[60vh] shadow-xl hidden md:block overflow-y-auto"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 18,
              mass: 0.8,
            }}
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">SoundMoney logo</span>
                  <img
                    className="md:h-8 md:w-auto w-32 backdrop-blur-[1px]"
                    src="/images/sound-logo-w.svg"
                    alt="logo_white"
                  />
                </Link>
              </div>
              <div className="flex md:gap-x-4 gap-x-2 items-center">
                <div className="hidden md:flex gap-x-5 items-center">
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-12 w-12" />
                </button>
              </div>
            </div>

            <div className="w-full border-y border-dotted border-[#EFF3F5] text-white h-16 mt-4" />
            <div className="w-full border-b border-dotted border-[#EFF3F5] text-white h-16 flex items-center justify-center">
              <div className="flex justify-center items-center gap-x-8 text-xl py-1">
                <Link href="/" className="text-[#FD7125] font-bold">Home</Link>
                <p>/</p>
                <Link href="/audience">Audience</Link>
                <p>/</p>
                <Link href="https://unitrap.vercel.app/" target="_blank" rel="noopener noreferrer">Swap</Link>
                <p>/</p>
                <Link href="/">$BEZY</Link>
                <p>/</p>
                <Link href="/">Blog</Link>
                <p>/</p>
                <Link href="https://crypto.news/exclusive-how-soundmoney-protocol-aims-to-disrupt-the-future-of-music/" target="_blank" rel="noopener noreferrer">Press</Link>
                <p>/</p>
                <Link href="https://discord.gg/2WJTD94uZT" target="_blank" rel="noopener noreferrer">Discord</Link>
                <p>/</p>
                <Link href="https://x.com/soundmoneyxyz" target="_blank" rel="noopener noreferrer">Social</Link>
              </div>
            </div>
            <div className="w-full border-b border-dotted border-[#EFF3F5] text-white h-16" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden fixed top-0 left-0 right-0 z-50 h-screen bg-black text-white overflow-y-auto"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 18,
              mass: 0.8,
            }}
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">SoundMoney logo</span>
                  <img
                    className="md:h-8 md:w-auto w-32 backdrop-blur-[1px]"
                    src="/images/sound-logo-w.svg"
                    alt="logo_white"
                  />
                </Link>
              </div>
              <div className="flex md:gap-x-4 gap-x-2 items-center">
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-12 w-12" />
                </button>
              </div>
            </div>

            <div className="w-full border-y border-dotted border-[#EFF3F5] text-white h-16 mt-4" />
            <div className="w-full border-b border-dotted border-[#EFF3F5] text-white py-8 flex items-center justify-center">
              <div className="flex flex-col justify-center items-center text-xl gap-y-4">
                <Link href="/" className="text-[#FD7125] font-bold">/ Home</Link>
                <Link href="/audience">/ Audience</Link>
                <Link href="/">/ About</Link>
                <Link href="/">/ Blog</Link>
                <Link href="https://crypto.news/exclusive-how-soundmoney-protocol-aims-to-disrupt-the-future-of-music/" target="_blank" rel="noopener noreferrer">/ Press</Link>
                <Link href="https://discord.gg/2WJTD94uZT" target="_blank" rel="noopener noreferrer">/ Discord</Link>
                <Link href="https://x.com/soundmoneyxyz" target="_blank" rel="noopener noreferrer">/ Social</Link>
                <Link href="https://unitrap.vercel.app/" target="_blank" rel="noopener noreferrer">/ Swap</Link>
                <Link href="/">/ Ecosystem</Link>
                <Link href="/">/ Contact</Link>
              </div>
            </div>
            <div className="w-full border-b border-dotted border-[#EFF3F5] text-white h-16" />
            <div className="flex flex-col justify-center gap-x-5 items-center w-72 mx-auto mt-8 space-y-4">
              <div className="flex gap-x-3">
                <Link href="https://x.com/soundmoneyxyz" target="_blank" rel="noopener noreferrer" className="w-8 h-8 p-1 rounded-full bg-white flex justify-center items-center hover:bg-gray-200 transition">
                  <Twitter size={20} className="text-black" />
                </Link>
                <Link href="https://discord.gg/2WJTD94uZT" target="_blank" rel="noopener noreferrer" className="w-8 h-8 p-1 rounded-full bg-white flex justify-center items-center hover:bg-gray-200 transition">
                  <MessageCircle size={20} className="text-black" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
