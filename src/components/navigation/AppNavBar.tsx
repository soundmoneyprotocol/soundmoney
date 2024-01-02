import Link from 'next/link';
import React from 'react';
import { NavBarLoginBtn, NavBarLogoutBtn, ThemeButton } from '../inputs/button';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export const AppNavBar = async () => {
  const supabase = createClient(cookies());

  async function isAuth() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      return true;
    }
    return false;
  }

  return (
    <nav
      className='flex items-center justify-between p-6 lg:px-8'
      aria-label='Global'
    >
      <div className='flex lg:flex-1'>
        <Link href='/' className='-m-1.5 p-1.5'>
          <span className='sr-only'>360NFT</span>
          <img
            className='h-8 w-auto'
            src='/images/logo_l.svg'
            alt='360NFT_LOGO'
          />
        </Link>
      </div>

      <div className='flex gap-x-8 items-center'>
        <ThemeButton />
        <button className='rounded-xl py-2.5 font-semibold font-mont '>
          Claim Drop
        </button>
        {(await isAuth()) ? <NavBarLogoutBtn /> : <NavBarLoginBtn />}
      </div>
    </nav>
  );
};