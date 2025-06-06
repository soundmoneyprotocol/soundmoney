import React from 'react'
import { ArrowRight } from 'lucide-react';
import { FAQs } from '@/components/Home/FAQs';


export const Infrastructure = () => {
    return (
        <div className='bg-[#AFB3B599]'>
        <div className='px-4 md:px-12 py-20 mx-4 md:mx-12 rounded-3xl shadow-2xl bg-white space-y-12 '>
            <h3 className='text-[34px] md:text-[64px] text-center font-bold -tracking-[1%] leading-[110%] font-monaCon relative'>Built for Web3 Creators. <br /> Backed by Real<br />
                <span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-0 before:bg-[url('/images/black_vector.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-105 before:scale-y-105">
                    <span className="relative z-10 text-white">Infrastructure</span>
                </span>
            </h3>
            <div className='flex flex-col justify-center items-center space-y-8'>
                <div className='bg-[#EFF3F5] max-w-5xl rounded-3xl w-full shadow-lg grid grid-cols-1 lg:grid-cols-2 p-4 md:p-8 gap-y-8 sticky top-5 z-0'>
                    <div className='col-span-1 flex flex-col justify-between space-y-4'>
                        <h2 className='bg-[#FD7125] w-fit font-bold p-1 rounded'>SOLARAH</h2>
                        <h3 className='text-[34px] md:text-6xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>The fuel behind SoundMoney</h3>
                        <p className='max-w-sm text-sm md:text-base'>$BEZY  is the social token powering creator rewards, memberships, tipping, and on-chain engagement across the platform.</p>
                        <button className='mt-4 flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-black text-white w-fit'>Learn More <ArrowRight /></button>
                    </div>
                    <div className='bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)] w-full col-span-1 flex justify-center rounded-3xl'>
                        <img className='w-[65%] md:w-[75%]' src='/images/phone.svg' />
                    </div>
                </div>
                <div className='bg-white max-w-5xl rounded-3xl w-full shadow-lg grid grid-cols-1 lg:grid-cols-2 p-4 md:p-8 gap-y-8 sticky top-24 z-10'>
                    <div className='col-span-1 flex flex-col justify-between'>
                        <h2 className='bg-[#FD7125] w-fit font-bold p-1 rounded'>SAGA</h2>
                        <h3 className='text-[34px] md:text-5xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>The fuel behind SoundMoney</h3>
                        <p className='max-w-sm'>$BEZY  is the social token powering creator rewards, memberships, tipping, and on-chain engagement across the platform.</p>
                        <button className='mt-4 flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-black text-white w-fit'>Learn More <ArrowRight /></button>
                    </div>
                    <div className='bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)] w-full col-span-1 flex justify-center rounded-3xl'>
                        <img className='w-[65%] md:w-[75%]' src='/images/phone.svg' />
                    </div>
                </div>
                <div className='bg-[#EFF3F5] max-w-5xl rounded-3xl w-full shadow-lg grid grid-cols-1 lg:grid-cols-2 p-4 md:p-8 gap-y-8 sticky top-20 z-20'>
                    <div className='col-span-1 flex flex-col justify-between'>
                        <h2 className='bg-[#FD7125] w-fit font-bold p-1 rounded'>$BEZY</h2>
                        <h3 className='text-[34px] md:text-5xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>The fuel behind SoundMoney</h3>
                        <p className='max-w-sm'>$BEZY  is the social token powering creator rewards, memberships, tipping, and on-chain engagement across the platform.</p>
                        <button className='mt-4 flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-black text-white w-fit'>Explore $BEZY <ArrowRight /></button>
                    </div>
                    <div className='bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)] w-full col-span-1 flex justify-center rounded-3xl'>
                        <img className='w-[65%] md:w-[75%]' src='/images/phone.svg' />
                    </div>
                </div>
            </div>
            <FAQs />
            <div></div>
        </div>

        </div>
    )
}
