import React from 'react'
import { ArrowRight } from 'lucide-react';

export const Infrastructure = () => {
    return (
        <div>
            <h3 className='text-4xl w-72 font-bold -tracking-[1%] leading-[110%] font-monaCon'>Built for Web3 Creators. Backed by Real Infrastructure</h3>
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-[#EFF3F5] max-w-5xl rounded-3xl w-full grid grid-cols-2 p-8'>
                    <div className='col-span-1 flex flex-col justify-between'>
                        <h2 className='bg-[#FD7125] w-fit font-bold p-1 rounded'>SOLARAH</h2>
                        <h3 className='text-5xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>The fuel behind SoundMoney</h3>
                        <p className='max-w-sm'>$BEZY  is the social token powering creator rewards, memberships, tipping, and on-chain engagement across the platform.</p>
                        <button className='mt-4 flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-black text-white w-fit'>Learn More <ArrowRight /></button>
                    </div>
                    <div className='bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)] w-full col-span-1 flex justify-center rounded-3xl'>
                        <img className='w' src='/images/phone.svg' />
                    </div>
                </div>
                <div className='bg-wjite max-w-5xl rounded-3xl w-full grid grid-cols-2 p-8'>
                    <div className='col-span-1 flex flex-col justify-between'>
                        <h2 className='bg-[#FD7125] w-fit font-bold p-1 rounded'>SAGA</h2>
                        <h3 className='text-5xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>The fuel behind SoundMoney</h3>
                        <p className='max-w-sm'>$BEZY  is the social token powering creator rewards, memberships, tipping, and on-chain engagement across the platform.</p>
                        <button className='mt-4 flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-black text-white w-fit'>Learn More <ArrowRight /></button>
                    </div>
                    <div className='bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)] w-full col-span-1 flex justify-center rounded-3xl'>
                        <img className='w' src='/images/phone.svg' />
                    </div>
                </div>
                <div className='bg-[#EFF3F5] max-w-5xl rounded-3xl w-full grid grid-cols-2 p-8'>
                    <div className='col-span-1 flex flex-col justify-between'>
                        <h2 className='bg-[#FD7125] w-fit font-bold p-1 rounded'>$BEZY</h2>
                        <h3 className='text-5xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>The fuel behind SoundMoney</h3>
                        <p className='max-w-sm'>$BEZY  is the social token powering creator rewards, memberships, tipping, and on-chain engagement across the platform.</p>
                        <button className='mt-4 flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-black text-white w-fit'>Learn More <ArrowRight /></button>
                    </div>
                    <div className='bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)] w-full col-span-1 flex justify-center rounded-3xl'>
                        <img className='w' src='/images/phone.svg' />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
