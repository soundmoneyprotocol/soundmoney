import React from 'react';
import { ArrowRight } from 'lucide-react';


export function Hero () {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center h-[120vh] bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)]'>

            <div className='max-w-4xl mx-auto text-center flex flex-col items-center gap-y-4'>
                <h1 className='text-[100px] font-black -tracking-[1%] leading-[110%] font-monaCon'>Empowering Creators in the Web2.5 Era</h1>
                <p className='font-bold text-balance  -tracking-[1%] leading-[143%] '>SoundMoney Protocol is a creator-first ecosystem built on blockchain—powering music, video, art, and fan engagement without intermediaries.</p>
                <div className=' flex gap-x-4'>
      <button className='bg-black text-white rounded-xl py-[13px] px-[25px]'>Get Started</button>
                    <button className='flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white'>Learn More <ArrowRight /></button>
                </div>
                <></>
                <></>
                <></>
            </div>
            <div></div>
            <div></div>
        </div>
    )
};