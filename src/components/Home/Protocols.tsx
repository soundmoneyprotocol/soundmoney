import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Protocols = () => {
  return (
    <div className=' '>
      <div className='flex flex-col lg:flex-row lg:justify-between md:px-12 py-20 px-4'>
        <h3 className='text-[34px] md:text-6xl font-black md:-tracking-[1%] -tracking-[2%] leading-tight md:leading-[64px] font-monaCon relative z-20 text-center lg:text-left'>Powering the <br className='hidden md:block' />Creator Economy:
          <br /> <span className='relative z-10'>Our Protocol <img className='absolute inset-0 top-2 -z-10 scale-x-105 md:scale-y-90 md:scale-x-100' src="/images/hero_v.svg" alt="" /></span> <br className='md:hidden' /> Pillars</h3>
        <div className='max-w-xl w-full bg-white rounded-2xl border p-4 space-y-12 shadow-xl mt-10 md:mt-0'>
          <p className='w-52 font-semibold'>Unlock the Future of Fan Engagement</p>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className='bg-[#0000000D] rounded-2xl px-4'>
              <AccordionTrigger className='text-2xl font-bold'>Own & Monetize Your Music</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='bg-[#0000000D] rounded-2xl px-4'>
              <AccordionTrigger className='text-2xl font-bold'> NFT Drops for Music & Art</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className='bg-[#0000000D] rounded-2xl px-4'>
              <AccordionTrigger className='text-2xl font-bold'> Live Video Streaming & VOD </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className='bg-[#0000000D] rounded-2xl px-4'>
              <AccordionTrigger className='text-2xl font-bold'> Launch Your Social Token </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className='bg-[#0000000D] rounded-2xl px-4'>
              <AccordionTrigger className='text-2xl font-bold'>Real-Time Fan Interactions</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className='bg-[#0000000D] rounded-2xl px-4'>
              <AccordionTrigger className='text-2xl font-bold'>Artist Support Foundation</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7" className='bg-[#0000000D] rounded-2xl px-4'>
              <AccordionTrigger className='text-2xl font-bold'>Digital Art Showcases</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}