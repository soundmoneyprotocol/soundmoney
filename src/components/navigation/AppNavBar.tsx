import Link from 'next/link';
import React from 'react';
import { NavBarLoginBtn, NavBarLogoutBtn, ThemeButton } from '../inputs/button';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const AppNavBar = async () => {
  const supabase = createClient(cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <nav
      className="flex items-center justify-between p-4 shadow-md lg:px-8 md:fixed w-full bg-white"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">SoundMoney</span>
          <img
            className="md:h-8 md:w-auto w-32 backdrop-blur-[1px]"
            src="/images/soundmoney-blk-logo.png"
            alt="soundmoney_black"
          />
        </Link>
      </div>

      <div className="flex md:gap-x-8 gap-x-2 items-center">
        {/* <ThemeButton /> */}
        {/* <Link href={'/docs'} className='text-blue-600 hover:text-blue-500 text-sm md:text-base'>
          Docs
        </Link>
        <Link href={'/aboutus'} className='text-blue-600 hover:text-blue-500 text-sm md:text-base'>
          About
        </Link>
        <Link href={'/profile/djbenito304'} className='text-blue-600 hover:text-blue-500 text-sm md:text-base'>
          Demo
        </Link> */}

        {/* {session?.user ? <Link href={'/account/referral'} className='rounded-xl bg-white py-2.5 px-3 font-semibold font-mont'>
          Referral Code
        </Link> : ''} */}

        {/* {session?.user ? <NavBarLogoutBtn /> : <NavBarLoginBtn />} */}
      </div>
    </nav>
  );
};
