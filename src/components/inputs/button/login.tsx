'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useFormStatus } from 'react-dom';

export const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='greenToPurple py-2 px-6 rounded-xl'
      disabled={pending}
    >
      {pending ? 'Loading...' : 'Log in'}
    </button>
  );
};

export const NavBarLoginBtn = () => {
  const router = useRouter();
  return (
    <button
      className='rounded-xl py-2.5 font-semibold font-mont greenToPurple px-3 hover:scale-[0.98] duration-200 transition'
      onClick={() => router.push('/account/login')}
    >
      Login
    </button>
  );
};

export const NavBarLogoutBtn = () => {
  const [pending, setPending] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    setPending(true);
    const { error } = await supabase.auth.signOut();

    if (error) {
      setPending(false);
      console.error(error);
      return;
    }

    setPending(false);
    return router.push('/');
  };

  return (
    <button
      className='rounded-xl py-2.5 font-semibold font-mont greenToPurple px-3 hover:scale-[0.98] duration-200 transition'
      onClick={handleLogout}
    >
      {pending ? 'Logging out' : 'Log out'}
    </button>
  );
};
