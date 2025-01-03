'use client';
import BroadcastStream from '@/components/BroadcastStream';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Solarah = () => {
  const [openStream, setOpenStream] = useState(false);
  return (
    <div className="md:mt-24 mt-8">
      <div className="relative">
        <div className="w-full relative h-[13rem]">
          <Image
            fill
            src="/images/solarah_new_banner.png"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-12 left-12">
          <img
            src="/images/solarah_speaks.png"
            className="w-32 h-32 rounded-full orangeToPink"
          ></img>
        </div>
      </div>
      <div className="px-8 flex-wrap flex gap-8 items-stretch h-full">
        <div className="pt-16">
          <a
            target="_blank"
            href="https://open.spotify.com/show/1Plty3NLGC4NYcczOXJG9K?si=f95556788bc34fbb"
            className="text-xl font-bold hover:text-cyan-500 text-cyan-600 duration-200"
          >
            @SolarahSpeaks
          </a>
          <p className="text-sm lg:max-w-96 text-justify leading-tight pt-5">
            Solarah, a writer, advocate, and the founder of Solarah AI, is
            redefining the digital landscape for neurodivergent content
            creators. Having faced numerous challenges as a neurodivergent
            individual herself, Solarahs mission is clear: to create a space
            where creators who often struggle with the neurotypical demands of
            social media can flourish and be heard. SOLARAH is Launching a
            Dinner Club for her community incentivizing her community members to
            contribute to the platform via exclusive Dinner Club memberships.
          </p>
          <p className="text-sm lg:max-w-96 text-justify leading-tight pt-5">
            The more support a sign gives, they get access to a dinner hosted by
            me in their honour. - Solarah 🍽️🍴
          </p>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://blog.solarah.xyz/solarahs-events/"
            target="_blank"
            rel="noopener noreferrer"
          >
            👉✨🔮blog.Solarah.xyz
          </a>
        </div>
        <div className={` h-80 w-80 mt-8 fixed -bottom-20 left-5`}>
          <BroadcastStream />
        </div>
        <div className="bg-gray-50 flex-1 self-stretch py-8 px-6 h-full pb-52">
          <h2 className="font-extrabold text-2xl text-slate-500">
            Daily Alkhemy 🌞 Sunrise Salutations
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

export default Solarah;
