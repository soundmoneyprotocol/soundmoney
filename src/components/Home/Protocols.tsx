import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Protocols = () => {
  return (
    <div className=''>
        <div className='flex justify-between'>
          <h3 className='text-4xl w-72 font-black -tracking-[1%] leading-[110%] font-monaCon'>Powering the Creator Economy: Our Protocol Pillars</h3>
<div className='max-w-3xl w-full bg-white rounded-2xl border p-4 space-y-12'>
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