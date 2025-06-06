import React from 'react'
import { ArrowRight } from 'lucide-react';


export const CTA = () => {
  return (
    <div className='bg-[#AFB3B599] flex flex-col justify-center items-center py-20 text-center space-y-12'>
          <h3 className='text-[64px] max-w-2xl font-bold -tracking-[1%] leading-[110%] font-monaCon'>Start Building  <span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-0 before:bg-[url('/images/hero_v.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-105 before:scale-y-110">
                <span className="relative z-10">The Future</span>
              </span> <br/> of Music, Art & Streaming</h3>
          <p className='max-w-xl text-balance font-bold'>Experience a platform where creativity meets technology, empowering artists and fans alike in the decentralized era.</p>
          <div className=' flex gap-x-4'>
      <button className='bg-black text-white rounded-xl py-[13px] px-[25px] font-bold'>Mint a Song</button>
                    <button className='flex items-center gap-x-2 border rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white font-bold  '>Explore the docs <ArrowRight /></button>
                </div>
    </div>
  )
}
