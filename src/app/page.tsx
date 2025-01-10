import TextAnimation from '@/components/TextAnimation';
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
    <div className="">
      {/* <HomeContainer>
        <div className='space-y-8 md:space-y-4'>
          <p className='font-extralight dark:text-white'>
            Trapcard is currently invite-only
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
          <div>
          </div>
          <div className='rounded-3xl shadow-lg greenToPurple md:p-6 p-4 max-w-xl'>
            <div className='mb-4'>
              <TextAnimation />
            </div>
            {searchParams.msg && (
              <p className='mt-4 p-4 text-black text-center'>
                {searchParams.msg}
              </p>
            )}
            <form>
              <div className='w-full mt-2'>
                <Link href={'/account/signup'} className='w-full text-sm font-bold'>
                  <button className='w-full bg-black py-2.5 rounded-lg'>
                    Register
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </HomeContainer> */}
      <section className="relative bgAnimation h-[85vh] md:h-screen md:pt-20 pt-40 flex justify-center items-center">
        <div className="md:px-12 px-6 space-y-5">
          <h1 className="md:text-6xl text-4xl font-extrabold font-druk">
            <span className="bg-clip-text text-white/40">Welcome </span>to
            <br />
            the <span className="bg-clip-text text-white/40">Future</span> of
            <br />
            Cultural <span className="bg-clip-text text-white/40">Social</span>
            <br />
            Content Creation
          </h1>
          <p className="text-white font-gilroy text-xl">
            Social Streaming Token Community w/₿EZY should “Be Easy Breezy”
          </p>
        </div>
      </section>
    </div>
  );
}
