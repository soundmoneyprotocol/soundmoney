import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Protocols = () => {
  const blobs = Array.from({ length: 6 });

  return (
    <div className='relative overflow-hidden'>
      <div className='flex flex-col lg:flex-row lg:justify-between md:px-12 py-20 px-4'>
        <h3 className='text-[34px] md:text-6xl font-black md:-tracking-[1%] -tracking-[2%] leading-tight md:leading-[64px] font-monaCon relative z-20 text-center lg:text-left'>Powering the <br className='hidden md:block' />Creator Economy:
          <br />
          <span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-10 before:bg-[url('/images/black_vector.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-125 before:scale-y-110 md:before:scale-x-[1.35] ">
            <span className="relative z-10 text-white">Our Protocol Pillars</span>
          </span></h3>
        <div className='max-w-xl w-full bg-white rounded-2xl border p-4 space-y-12 shadow-xl mt-10 md:mt-0 relative z-10'>
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
      <>
        {blobs.map((_, index) => {
          const delay = Math.random() * 5; // random delay for desync animation
          const left = Math.random() * 20;
          const top = Math.random() * 100;

          return (
            <div
              key={index}
              className="absolute w-20 h-20 rounded-full bg-white opacity-0 animate-float"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${8 + Math.random() * 5}s`,
              }}
            />
          );
        })}
      </>
    </div>
  )
}