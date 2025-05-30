import { ArrowRight } from 'lucide-react'
import React from 'react'   

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
    return (
        <div className='bg-black'>
            <div>
                <div className='bg-white rounded-2xl mx-12 p-8'>
                    <h3 className='text-4xl font-black -tracking-[1%] leading-[110%] font-monaCon'>Soundmoney is a decentralised multimedia protocol where artists and creators take back ownership of their content and data while fans earn by what they love.</h3>
                    <div className='max-w-sm ml-auto mt-16 space-y-5'>
                        <p className='text-[#000000CC]'>We&apos;re not just an app—we&apos;re building an ecosystem. Blockchain, Token, DEX, Wallet, Live Streams, Social Tokens, and a Creator Crowdfunding—all under one roof.</p>
                        <button className='flex items-center gap-x-2 border border-black rounded-xl py-[13px] px-[25px] shadow-[0px_1px_2px_0px_#1018280D] bg-white font-bold'>View Ecosystem Deck <ArrowRight /></button>
                    </div>
                    <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 mt-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className=" w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md bg-[#EFF3F5] p-6 rounded-xl shadow-sm transition-shadow space-y-4"
                            >
                                <img className='w-10' src={`/images/icons/${feature.img}`}/>
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
            </div>
        </div>
    )
}