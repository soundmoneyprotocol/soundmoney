'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    status: 'Live',
    title: 'SoundMoney Music App',
    description: 'Artists upload music, fans earn & support',
  },
  {
    status: 'In Dev',
    title: 'Live Stream Light',
    description: 'Lightweight live video & events',
  },
  {
    status: 'In Dev',
    title: 'NFT Art Drops',
    description: 'Tokenized art galleries for visual creators',
  },
  {
    status: 'In Dev',
    title: '360 Wallet',
    description: 'Mobile wallet for $BEEZY and creator tokens',
  },
];

const statusColor = {
  Live: 'bg-green-500',
  'In Dev': 'bg-yellow-500',
};

export const Milestones: React.FC = () => {
  const items = [...timelineData, ...timelineData]; // Duplicate for seamless scroll

  return (
    <div className="relative overflow-hidden py-12 bg-gradient-to-r from-[#e0f7fa] to-[#f1f8ff]">
      {/* Background Stripes */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(to right, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 40px)',
          backgroundSize: '40px 100%',
        }}
      />

      {/* Marquee Timeline */}
      <motion.div
        className="flex gap-12 w-max relative z-10"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Status Label */}
            <div className="mb-2 text-sm font-medium text-gray-600">{item.status}</div>

            {/* Vertical Indicator */}
            <div className="relative flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full ${statusColor[item.status as keyof typeof statusColor]} shadow-md`} />
              <div className="w-px h-6 bg-gray-400" />
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-lg px-5 py-4 mt-4 text-center w-64">
              <div className="font-semibold text-gray-800">{item.title}</div>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
