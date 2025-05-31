import Link from 'next/link';
import React from 'react';
// import { NavBarLoginBtn, NavBarLogoutBtn, ThemeButton } from '../inputs/button';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { ArrowRight } from 'lucide-react';


export const AppNavBar = async () => {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <nav
      className="flex items-center justify-between p-4 lg:px-8 md:fixed w-full bg-transparent"
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
        <div className=' hidden md:flex'>
      <button className='flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D]'>Buy Bezy     <ArrowRight /></button>
      <button className='bg-black text-white rounded-xl py-[13px] px-[25px]'>Soundmoney.social App</button>

        </div>
      <button className='w-[68px] h-[26px] flex flex-col justify-between'>
        <div className='w-full bg-black border-b-2 border-black'/>
        <div className='w-full bg-black border-b-2 border-black'/>
        <div className='w-full bg-black border-b-2 border-black'/>
      </button>
      </div>
    </nav>
  );
};
