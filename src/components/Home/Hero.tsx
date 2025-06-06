import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MarqueeImages } from '../ui/MarqueeImages';


export function Hero() {

    // Different image sets for each line
    const lineImages = [
        // Artists
        [
            // 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
            'https://images.unsplash.com/photo-1583691919795-b66ab8cb40c5?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        // Creators
        [
            'https://images.unsplash.com/photo-1678043666001-681b766e5a68',
            // 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9',
        ],
        // Musicians
        [
            'https://images.unsplash.com/photo-1512288094938-363287817259',
            'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7',
            // 'https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a',
        ],
        // Fans
        [
            'https://images.unsplash.com/photo-1579463148228-138296ac3b98',
            // 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
            // 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        ],
    ];

    const spacings = ['mx-32', 'mx-60', 'mx-80', 'mx-40'];
    const speeds = [10, 15, 12, 20];

    return (
        <div id='hero' className='min-h-screen gap-y-40 flex flex-col md:justify-center md:items-center h-screen md:h-[120vh] bg-[linear-gradient(180deg,_rgba(175,179,181,0.6)_42.73%,_#FD7125_100%)]'>

            <div className='px-4 max-w-4xl mx-auto text-center flex flex-col items-center gap-y-8 pt-'>
                <h1 className='md:text-[100px] text-[52px] font-black -tracking-[1%] leading-[110%] font-monaCon'>
                    <span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-0 before:bg-[url('/images/hero_v.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-105 before:scale-y-105">
                        <span className="relative z-10 text-black">Empowering</span>
                    </span> Creators in the Web2.5 Era
                </h1>
                <p className='font-bold text-balance text-lg -tracking-[1%] leading-[143%] '>SoundMoney Protocol is a creator-first ecosystem built on blockchain—powering music, video, art, and fan engagement without intermediaries.</p>
                <div className=' flex justify-center gap-x-4'>
                    <button className='bg-black text-white rounded-xl py-[13px] px-[25px] font-bold'>Get Started</button>
                    <button className='flex items-center gap-x-2 font-bold rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white'>Learn More <ArrowRight /></button>
                </div>
                <></>
                <></>
                <></>
            </div>
            <div className='w-full space-y-16'>
                {[0, 1, 2, 3].map((index) => (
                    <MarqueeImages
                        key={index}
                        images={lineImages[index]}
                        speed={speeds[index]}
                        direction={index % 2 === 0 ? 'left' : 'right'}
                        spacing={spacings[index]}
                        imageSize={75}
                    />
                ))}
            </div>
        </div>
    )
};

