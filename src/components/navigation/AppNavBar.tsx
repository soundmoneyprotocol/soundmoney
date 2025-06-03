'use client'
import Link from 'next/link';

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
// import { NavBarLoginBtn, NavBarLogoutBtn, ThemeButton } from '../inputs/button';
// import { createClient } from '@/utils/supabase/server';
// import { cookies } from 'next/headers';
import { ArrowRight } from 'lucide-react';


export const AppNavBar = () => {
  // const supabase = createClient(cookies());
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])


  const menuVariants = {
    hidden: { y: '-100%' },
    visible: { y: 0 },
    exit: { y: '-100%' }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 }
  }

  return (
    <nav
      className="flex items-center justify-between p-4 lg:px-8 w-full bg-[#AFB3B599]"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">SoundMoney logo</span>
          <img
            className="md:h-8 md:w-auto w-32 backdrop-blur-[1px]"
            src="/images/sound-logo.svg"
            alt="soundmoney_black"
          />
        </Link>
      </div>

      <div className="flex md:gap-x-4 gap-x-2 items-center">
        <div className=' hidden md:flex gap-x-5'>
          <button className='flex items-center gap-x-2 border border-black rounded-xl w-full py-[13px] shadow-[0px_1px_2px_0px_#1018280D]'>Buy Bezy     <ArrowRight /></button>
          <button className='bg-black text-white rounded-xl py-[13px] px-[25px]'>Soundmoney.social App</button>

        </div>
        <div>
          {/* Toggle Button */}
          <button onClick={() => setIsOpen(true)} className='w-[68px] h-[26px] flex flex-col justify-between'>
            <div className='w-full bg-black border-b-2 border-black' />
            <div className='w-full bg-black border-b-2 border-black' />
            <div className='w-full bg-black border-b-2 border-black' />
          </button>

          {/* AnimatePresence handles mounting/unmounting animations */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Dark Underlay */}
                <motion.div
                  className="fixed inset-0 bg-black z-40"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setIsOpen(false)}
                />

                {/* Sliding Nav Menu */}
                <motion.div
                  className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-[60vh] shadow-lg hidden md:block overflow-y-auto"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    type: 'spring',
                    stiffness: 100,  // Lower stiffness = slower, smoother motion
                    damping: 18,     // Damping controls how much it "bounces"
                    mass: 0.8        // Optional: adds a bit more gravity-like feel
                  }}
                >
                  <div className='flex items-center justify-between p-6'>
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
                      <div className=' hidden md:flex gap-x-5 items-center'>
                        <button className='flex items-center gap-x-2 border border-white rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D]'>Buy Bezy     <ArrowRight /></button>
                        <button className='bg-white text-black rounded-xl py-[13px] px-[25px]'>Soundmoney.social App</button>

                      </div>
                      <div>
                        {/* Toggle Button */}
                        <button onClick={() => setIsOpen(false)}>
                          <X className="h-12 w-12" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='w-full border-y border-dotted  border-[#EFF3F5] text-white h-16 mt-4'>

                  </div>
                  <div className='w-full border-b border-dotted  border-[#EFF3F5] text-white h-16 flex items-center justify-center'>
                    <div className='flex justify-center items-center gap-x-8 text-xl py-1'>
                      <Link href="/" className='text-[#FD7125] font-bold'>Home</Link>
                      <p className="">/</p>
                      <Link href="/">Earn</Link>
                      <p className="">/</p>
                      <Link href="/">$BEZY</Link>
                      <p className="">/</p>
                      <Link href="/">Blog</Link>
                      <p className="">/</p>
                      <Link href="/">Press</Link>
                      <p className="">/</p>
                      <Link href="/">Gallery</Link>
                      <p className="">/</p>
                      <Link href="/">SocialFi</Link>
                    </div>
                  </div>
                  <div className='w-full border-b border-dotted  border-[#EFF3F5] text-white h-16'>

                  </div>

                  {/* <div></div>
                  <div></div> */}
                </motion.div>
              </>
            )}

            <motion.div
              className='md:hidden fixed top-0 left-0 right-0 z-50 h-screen bg-black text-white overflow-y-auto'
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                type: 'spring',
                stiffness: 100,  // Lower stiffness = slower, smoother motion
                damping: 18,     // Damping controls how much it "bounces"
                mass: 0.8        // Optional: adds a bit more gravity-like feel
              }}
            >
              <div className='flex items-center justify-between p-6'>
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
                  {/* <div className=' hidden md:flex gap-x-5 items-center'>
                        <button className='flex items-center gap-x-2 border border-white rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D]'>Buy Bezy     <ArrowRight /></button>
                        <button className='bg-white text-black rounded-xl py-[13px] px-[25px]'>Soundmoney.social App</button>

                      </div> */}
                  <div>
                    {/* Toggle Button */}
                    <button onClick={() => setIsOpen(false)}>
                      <X className="h-12 w-12" />
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-full border-y border-dotted  border-[#EFF3F5] text-white h-16 mt-4'>

              </div>
              <div className='w-full border-b border-dotted  border-[#EFF3F5] text-white py-8 flex items-center justify-center'>
                <div className='flex flex-col justify-center items-center gap-x-8 text-xl gap-y-4'>
                  <Link href="/" className='text-[#FD7125] font-bold'>/ Home</Link>
                  <Link href="/">/ About</Link>
                  <Link href="/">/ Blog</Link>
                  <Link href="/">/ Press</Link>
                  <Link href="/">/ Gallery</Link>
                  <Link href="/">/ SocialFi</Link>
                  <Link href="/">/ Earn</Link>
                  <Link href="/">/ Ecosystem</Link>
                  <Link href="/">/ Contact</Link>
                </div>
              </div>
              <div className='w-full border-b border-dotted  border-[#EFF3F5] text-white h-16'>

              </div>
              <div className='flex flex-col justify-center gap-x-5 items-center w-72 mx-auto mt-8 space-y-4'>
                <button className='flex justify-center items-center gap-x-2 border border-white rounded-xl py-5 w-full shadow-[0px_1px_2px_0px_#1018280D]'>Buy Bezy     <ArrowRight /></button>
                <button className='bg-white text-black rounded-xl w-full py-5'>Soundmoney.social App</button>

              </div>
            </motion.div>

          </AnimatePresence>
          <></>
        </div>
        {/* <button className='w-[68px] h-[26px] flex flex-col justify-between'>
        <div className='w-full bg-black border-b-2 border-black'/>
        <div className='w-full bg-black border-b-2 border-black'/>
        <div className='w-full bg-black border-b-2 border-black'/>
      </button> */}
      </div>
    </nav>
  );
};
