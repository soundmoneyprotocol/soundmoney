import React from 'react';
import { ArrowRight } from 'lucide-react';


export function Hero() {
    return (
        <div id='hero' className='min-h-screen flex flex-col md:justify-center md:items-center h-screen md:h-[120vh] bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)] px-4'>

            <div className='max-w-4xl mx-auto text-center flex flex-col items-center gap-y-8 mt-32 md:mt-0'>
                <h1 className='md:text-[100px] text-[52px] font-black -tracking-[1%] leading-[110%] font-monaCon'>
                    <span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-0 before:bg-[url('/images/hero_v.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-105 before:scale-y-105">
                        <span className="relative z-10 text-black">Empowering</span>
                    </span> Creators in the Web2.5 Era
                </h1>
                <p className='font-bold text-balance text-lg -tracking-[1%] leading-[143%] '>SoundMoney Protocol is a creator-first ecosystem built on blockchain—powering music, video, art, and fan engagement without intermediaries.</p>
                <div className=' flex justify-center gap-x-4'>
                    <button className='bg-black text-white rounded-xl py-[13px] px-[25px] font-bold'>Get Started</button>
                    <button className='flex items-center gap-x-2 font-bold rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white'>Learn More <ArrowRight /></button>
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