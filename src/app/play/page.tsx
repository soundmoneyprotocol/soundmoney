/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React from 'react';

const Play = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="textGradient md:text-7xl text-4xl font-gilroy text-center font-bold leading-relaxed">
          Play
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 pb-8">
          <a
            href="https://www.360nft.app/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          ></a>
        </div>
      </div>
    </>
  );
};

export default Play;
