'use client'
import React from 'react'
import Link from 'next/link'
import { MoveUp, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLenis } from 'lenis/react';



export const Footer = () => {
    const lenis = useLenis();
    return (
        <footer className='grid grid-cols-1 md:grid-cols-2 py-10 px-4 md:px-20 bg-black min-h-[70vh]'>
            <div className='col-span-1 flex flex-row md:flex-col items-center md:items-start justify-between md:border-r bobrder-[#CFD1D3]'>
                <Link href='/' className='bg-white rounded-2xl w-16 h-16 items-center flex justify-center'><img src='/images/ft-logo.svg' /></Link>
                <Link href='' onClick={() => {
                    lenis?.scrollTo("#hero");
                }} className='border border-white rounded-full w-24 h-24 flex justify-center items-center text-white '><MoveUp /></Link>
            </div>
            <div className='flex md:flex-row flex-col justify-between'>
                <div className='md:pl-6 gap-8 order-last md:order-first flex md:flex-col flex-row flex-wrap'>
                    <div className='text-white flex'>
                        <p className='text-[#CFD1D3] text-[10px]'>Discover</p>
                        <div className='flex-col pl-4 flex gap-y-2 text-xs font-[400]'>
                            <Link href='#'>About</Link>
                            <Link href='#'>Earn</Link>
                            <Link href='#'>Bezy</Link>
                            <Link href='#'>Ecosystem</Link>
                            <Link href='#'>Blog</Link>
                        </div>
                    </div>
                    <div className='text-white flex'>
                        <p className='text-[#CFD1D3] text-[10px]'>Built with</p>
                        <div className='flex-col pl-4 flex gap-y-2 text-xs font-[400]'>
                            <Link href='#'>Saga</Link>
                            <Link href='#'>Livepeer</Link>
                            <Link href='#'>Superfluid Labs</Link>
                            <Link href='#'>Ritual AI</Link>
                        </div>
                    </div>
                    <div className='text-white flex text-[9px]'>
                        <p className='text-[#CFD1D3] '>&copy; {new Date().getFullYear()}</p>
                        <div className='flex-col pl-7 flex gap-y-2 text-xs font-[400]'>
                            <Link href='#'>Terms and Conditions</Link>
                            <Link href='#'>Privacy</Link>
                            <Link href='#'>Copyright</Link>
                        </div>
                    </div>


                </div>
                    <div className='flex flex-col justify-between items-end'>
                        <div className='flex gap-x-4'>
                            <button className='bg-black border font-bold text-sm md:text-base font-mona text-white rounded-xl py-[13px] px-2 md:px-[20px]'>Browse Creators</button>
                            <button className='bg-[#FD7125]  font-bold text-sm md:text-base font-mona rounded-xl py-[13px] px-[20px]'>Soundmoney.social App</button>
                        </div>
<div className='gap-4 md:flex hidden'>
    <Link className='w-6 h-6 p-1 rounded-full bg-white flex justify-center items-center' href='/'><Facebook size={16}/></Link>
                        <Link className='w-6 h-6 p-1 rounded-full bg-white flex justify-center items-center' href='/'><Linkedin size={16}/></Link>
    <Link className='w-6 h-6 p-1 rounded-full bg-white flex justify-center items-center' href='/'><Instagram size={16}/></Link>
</div>
                    </div>
            </div>
            <div className='gap-4 flex md:hidden justify-center mt-8'>
    <Link className='w-6 h-6 p-1 rounded-full bg-white flex justify-center items-center' href='/'><Facebook size={16}/></Link>
                        <Link className='w-6 h-6 p-1 rounded-full bg-white flex justify-center items-center' href='/'><Linkedin size={16}/></Link>
    <Link className='w-6 h-6 p-1 rounded-full bg-white flex justify-center items-center' href='/'><Instagram size={16}/></Link>
</div>
        </footer>
    )
}
