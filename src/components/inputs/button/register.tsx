'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

export const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='bg-black w-full text-sm py-2 rounded-lg'
    >
      {pending ? 'Loading...' : ' Register'}
    </button>
  );
};
