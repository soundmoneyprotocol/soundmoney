/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React from 'react';

const Swap = () => {
  return (
    <>
      <div className="mt-8 grid md:grid-cols-3 gap-6 pb-8">
        <a
          href="https://unitrap.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
        ></a>
      </div>
    </>
  );
};

export default Swap;
