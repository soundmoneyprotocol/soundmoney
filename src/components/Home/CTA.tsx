import React from 'react'
import { ArrowRight } from 'lucide-react';


export const CTA = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 text-center space-y-12'>
          <h3 className='text-[64px] max-w-2xl font-bold -tracking-[1%] leading-[110%] font-monaCon'>Start Building  the Future <br/> of Music, Art & Streaming</h3>
          <p className='max-w-xl text-balance font-bold'>Experience a platform where creativity meets technology, empowering artists and fans alike in the decentralized era.</p>
          <div className=' flex gap-x-4'>
      <button className='bg-black text-white rounded-xl py-[13px] px-[25px]'>Mint a Song</button>
                    <button className='flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white'>Explore the docs <ArrowRight /></button>
                </div>
    </div>
  )
}
