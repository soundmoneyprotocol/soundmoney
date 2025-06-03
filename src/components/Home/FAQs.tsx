import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from 'lucide-react';


export const FAQs = () => {
    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto md:px-12 gap-8'>
                <div className='col-span-1 flex flex-col justify-between'>
                    <h3 className='text-[64px] w-72 font-bold -tracking-[1%] leading-[110%] font-monaCon'>FAQs</h3>
                    <div className='lg:block space-y-4 hidden'>
                        <p className='font-bold'>Want to partner collab
                            <br />or invest with Soundmoney</p>
                        <button className='flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white font-bold'>Learn More <ArrowRight /></button>
                    </div>
                </div>
                <div className='bg-[#EFF3F5] max-w-3xl w-full rounded-2xl border p-4 space-y-12'>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        <AccordionItem value="item-1" className='bg-white rounded-2xl px-4'>
                            <AccordionTrigger className='text-2xl font-bold'>Own & Monetize Your Music</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className='bg-white rounded-2xl px-4'>
                            <AccordionTrigger className='text-2xl font-bold'> NFT Drops for Music & Art</AccordionTrigger>
                            <AccordionContent>
                                Yes. It comes with default styles that matches the other
                                components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className='bg-white rounded-2xl px-4'>
                            <AccordionTrigger className='text-2xl font-bold'> Live Video Streaming & VOD </AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className='bg-white rounded-2xl px-4'>
                            <AccordionTrigger className='text-2xl font-bold'> Launch Your Social Token </AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className='bg-white rounded-2xl px-4'>
                            <AccordionTrigger className='text-2xl font-bold'>Real-Time Fan Interactions</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6" className='bg-white rounded-2xl px-4'>
                            <AccordionTrigger className='text-2xl font-bold'>Artist Support Foundation</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7" className='bg-white rounded-2xl px-4'>
                            <AccordionTrigger className='text-2xl font-bold'>Digital Art Showcases</AccordionTrigger>
                            <AccordionContent>
                                Yes. It&apos;s animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='space-y-4 lg:hidden flex flex-col just text-center items-center w-full mt-8'>
                    <p className='font-bold'>Want to partner collab
                        <br />or invest with Soundmoney</p>
                    <button className='flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white font-bold'>Learn More <ArrowRight /></button>
                </div>
            </div>

            <div></div>
            <div></div>
        </div>
    )
}
