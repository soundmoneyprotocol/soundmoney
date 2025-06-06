import { ArrowRight } from 'lucide-react'
import React from 'react'
import { MarqueeImages } from '../ui/MarqueeImages';


type Feature = {
    img: string;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        img: 'ft-icon1.svg',
        title: "Web3-native infrastructure",
        description:
            "SoundMoney operates on a robust blockchain infrastructure, ensuring transparency and security for all transactions.",
    },
    {
        img: 'ft-icon2.svg',
        title: "$BEZY Token economy",
        description:
            "The $BEZY token facilitates transactions within the ecosystem, enabling features like tipping, subscriptions, and access to exclusive content.",
    },
    {
        img: 'ft-icon4.svg',
        title: "Multimedia Platform",
        description:
            "A decentralized platform where artists can share music, videos, and art, retaining full ownership and control over their creations.",
    },
    {
        img: 'ft-icon3.svg',
        title: "Artist First Label Supporting",
        description:
            "We offer assistance with Marketing and IP licensing, decentralized finance literacy and promotional support to make a sustainable living from their Art.",
    },
    {
        img: 'ft-icon4.svg',
        title: "Airstreams",
        description:
            "Airdrops / Rewards – Free rewards from creators to their followers based on predefined distribution criteria to keep fans engaged and guessing what's next.",
    },
];

export const About = () => {

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
        <div className='bg-[linear-gradient(360deg,_rgba(175,179,181,0)_44.91%,_#FD7125_100%)] relative backdrop-blur-[95px] h-full overflow-y-hidden pb-40'>
            {/* <div className='backdrop-blur-[95px]'> */}
                <div className='backdrop-blur-[1005px] top-[200px] z-10 absolute inset-0'>
                    <img className='backdrop-blur-[95px] w-[150vw] min-h-[150vh] lg:min-h-[120vh] rotate-[360deg]' src='/images/abt-grad.svg' alt='' />
                </div>
                <div className='bg-white rounded-2xl mx-4 md:mx-12 py-8 md:py-16 relative z-50'>
                    <h3 className="md:text-[64px] text-4xl font-black -tracking-[1%] leading-[110%] font-monaCon text-center md:text-left px-8 md:px-16">
                        <span className="relative inline-block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:-z-10 before:bg-[url('/images/black_vector.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:scale-x-105 before:scale-y-105 ">
                            <span className="relative z-10 text-white">Soundmoney   </span>
                        </span>
                        &nbsp; &nbsp;is a decentralised multimedia protocol where artists and creators take back ownership of their content and data while fans earn by what they love.
                    </h3>

                    <div className='max-w-md md:ml-auto mt-16 space-y-5 px-8 md:px-16'>
                        <p className='text-[#000000CC]'>We&apos;re not just an app—we&apos;re building an ecosystem. Blockchain, Token, DEX, Wallet, Live Streams, Social Tokens, and a Creator Crowdfunding—all under one roof.</p>
                        <button className='flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white font-bold'>View Ecosystem Deck <ArrowRight /></button>
                    </div>
                    <div className='w-full space-y-16 py-24'>
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
                    <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 mt-16 px-8 md:px-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className=" w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md bg-[#EFF3F5] p-6 rounded-xl shadow-sm transition-shadow space-y-4"
                            >
                                <img className='w-10' src={`/images/icons/${feature.img}`} />
                                <div className='space-y-2'>
                                    <h3 className="font-semibold text-lg text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-snug">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            {/* </div> */}
            <div className='absolute bottom-0 inset-x-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_10%,_rgba(175,_179,_181,_0.6)_44.91%,_#48EA63_100%)] h-[40vh] z-40'></div>
        </div>
    )
}