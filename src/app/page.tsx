import { HomeContainer } from '@/components/content';
import { RegisterButton } from '@/components/inputs/button';
import { signUp } from '@/lib/actions';
import Link from 'next/link';
import React from 'react';

export default function Home({
  searchParams,
}: {
  searchParams: { msg: string };
}) {
  return (
    <>
      <HomeContainer>
        <p className='font-extralight dark:text-white'>
          360NFT is currently invite-only
          <br />
          Here&apos;s how to{' '}
          <span>
            <Link href={'/'} className='text-cyanSky'>
              skip the waitlist now
            </Link>
          </span>
        </p>
        <h1 className='text-5xl font-druk text-corbeau/80'>
          GET ON
          <br />
          THE <span className='text-cyanSky'>LIST</span>
        </h1>
        <h3 className='text-4xl font-light text-corbeau dark:text-white'>
          Welcome Friend,
          <br />
          please log in
        </h3>
        <div className='rounded-3xl shadow-lg greenToPurple p-6 max-w-xl '>
          <h3 className='text-4xl font-black mb-5'>Get early access</h3>
          {searchParams.msg && (
            <p className='mt-4 p-4 text-black text-center'>
              {searchParams.msg}
            </p>
          )}
          <form action={signUp}>
            <div className='space-y-2 text-black'>
              <input
                type='email'
                name='email'
                className='bg-white py-2.5 rounded-lg px-4 w-full mb-5'
                placeholder='you@example.com'
                required
              />
              <input
                type='password'
                className='bg-white py-2.5 rounded-lg px-4 w-full mb-5'
                name='password'
                placeholder='••••••••'
                required
              />
            </div>
            <div className='w-full mt-2'>
              <RegisterButton />
              <button type='button' className='text-gray-300 text-sm mt-4'>
                Signed Up before? Check your status
              </button>
            </div>
          </form>
        </div>
      </HomeContainer>
    </>
  );
}
