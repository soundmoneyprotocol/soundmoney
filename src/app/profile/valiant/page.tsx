'use client';
import BroadcastStream from '@/components/BroadcastStream';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Valiant = () => {
  const [openStream, setOpenStream] = useState(false);
  return (
    <div className="md:mt-24 mt-8">
      <div className="relative">
        <div className="w-full relative h-[13rem]">
          <Image
            fill
            src="/images/Valient_Album.png"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-12 left-12">
          <img
            src="/images/Valient_Chandalier.png"
            className="w-32 h-32 rounded-full orangeToPink"
          ></img>
        </div>
      </div>
      <div className="px-8 flex-wrap flex gap-8 items-stretch h-full">
        <div className="pt-16">
          <a
            target="_blank"
            href="https://www.instagram.com/xwaiyaki"
            className="text-xl font-bold hover:text-cyan-500 text-cyan-600 duration-200"
          >
            @Valiant
          </a>
          <p className="text-sm lg:max-w-96 text-justify leading-tight pt-5">
            Valisnt, a writer, poet, and musician, is a member of the Solarah
            family. POETIC SURFACES • POETRY • PRAYERS . offerings from the
            heart, mind, and hand of valiant / waiyaki, and some of their
            favourite people in the world ✨
          </p>
          <p className="text-sm lg:max-w-96 text-justify leading-tight pt-5">
            The more energy a soul brings. - Valiant
          </p>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://wordsxwaiyaki.hustlesasa.shop/?fbclid=PAZXh0bgNhZW0CMTEAAaafeZqMn902tt59yGLiQe7_WpmrnSzXvKl15JHS55XmKUkgAMTGc_w7oLE_aem_bDGIDhopSSktKjKPsfMYHA"
            target="_blank"
            rel="noopener noreferrer"
          >
            👉Words X Waiyaki
          </a>
        </div>
        <div className={` h-80 w-80 mt-8 fixed -bottom-20 left-5`}>
          <BroadcastStream />
        </div>
        <div className="bg-gray-50 flex-1 self-stretch py-8 px-6 h-full pb-52">
          <h2 className="font-extrabold text-2xl text-slate-500">
            Words by Waiyaki
          </h2>
          <div className="mt-6">
            <iframe
              src="https://open.spotify.com/embed/show/1Plty3NLGC4NYcczOXJG9K?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valiant;
