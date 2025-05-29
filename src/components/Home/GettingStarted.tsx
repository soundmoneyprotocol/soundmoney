import React from 'react'
import { ArrowRight } from 'lucide-react';

export const GettingStarted = () => {
    return (
        <div className='py-12'>
            <h3 className='text-4xl text-center font-black -tracking-[1%] leading-[110%] font-monaCon pb-8'>Getting Started is easy</h3>
            <div className='max-w-5xl mx-auto space-y-6'>
                <div className='bg-white border rounded-xl py-4 items-center flex justify-between px-4'>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-black rounded-lg p-2 w-fit'>
                            <img src="/images/icons/icon-check.svg" alt="check" />
                        </div>
                        <p className='text-2xl font-bold'>Easy signup with Spotify</p>
                    </div>
                    <p className='text-sm max-w-lg text-gray-400 ml-auto'>Connect your Spotify account in seconds to start earning and sharing with your fans—no setup hassle.</p>
                </div>
                <div className='bg-white border rounded-xl py-4 items-center flex justify-between px-4'>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-black rounded-lg p-2 w-fit'>
                            <img src="/images/icons/icon-check.svg" alt="check" />
                        </div>
                        <p className='text-2xl font-bold'>3 exclusive invites per user</p>
                    </div>
                    <p className='text-sm max-w-lg text-gray-400 ml-auto'>Grow the community—invite up to three creators to join the platform with your unique access.</p>
                </div>
                <div className='bg-white border rounded-xl py-4 items-center flex justify-between px-4'>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-black rounded-lg p-2 w-fit'>
                            <img src="/images/icons/icon-check.svg" alt="check" />
                        </div>
                        <p className='text-2xl font-bold'>Built on Web3. Powered by fans</p>
                    </div>
                    <p className='text-sm max-w-lg text-gray-400 ml-auto'>Decentralized, creator-first infrastructure where your biggest supporters fuel your success.</p>
                </div>
            </div>
            <button className='mt-4 flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-black text-white w-fit mx-auto'>Learn More <ArrowRight /></button>
        </div>
    )
}