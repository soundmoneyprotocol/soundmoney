/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Docs = () => {
  return (
    <>
      <div className="lg:pt-32 pt-2 md:px-12 px-6">
        <h2 className="textGradient md:text-7xl text-4xl font-gilroy text-center font-bold leading-relaxed">
          Docs
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 pb-8">
          <a
            href="https://trapcard.gitbook.io/protocol/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              TrapCard Protocol v.2.5
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://trapcard.gitbook.io/lite-paper/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Lite Paper
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://trapcard.gitbook.io/tokenomics/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Tokenomics
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://trapcard.gitbook.io/roadmap/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Roadmap
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://trapcard.gitbook.io/overview/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Overview
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
          <a
            href="https://trapcard.gitbook.io/sound-money-api/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-12 items-center col-span-1 group border rounded-xl shadow-lg max-w-96 flex justify-between md:hover:scale-105  duration-200 hover:shadow-2xl"
          >
            <h2 className="font-bold text-2xl group-hover:border-b-2 border-black duration-200">
              Sound Money Api
            </h2>
            <img
              src="https://s2.svgbox.net/hero-outline.svg?ic=external-link&color=00ffaa"
              width="22"
              height="22"
            />
          </a>
        </div>
      </div>
      <section className="py-20 md:px-12 px-6">
        <h2 className="text-center md:text-6xl text-3xl font-gilroy font-bold text-cyanSky pb-12">
          Unleashing the Potential
        </h2>
        <p className="md:px-20 px-6 text-xl text-justify font-semibold text-black/85">
          In the rapidly evolving landscape of digital entertainment, the fusion
          of cutting-edge technology and innovative financial solutions has
          given birth to a new era - Web2.5 music streaming. Elevate your music
          experience by diving into the world of crypto payments, where seamless
          transactions meet the rhythm of your favorite tunes.
        </p>
        <div className="flex md:flex-row flex-col gap-6 py-20">
          <div className="border shadow-lg rounded-md p-8 space-y-4">
            <div className="bg-[#9c42f5] w-14 rounded-full p-2 shadow-inner border border-[#9c42f5]">
              <img src="/images/cubes.png" alt="cubes" className="" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-600 text-lg">
                Embrace Decentralisation
              </h3>
              <p className="text-sm">
                Say goodbye to traditional payment gateways and welcome
                decentralization with open arms. Web2.5 music streaming powered
                by crypto payments ensures that you have full control over your
                transactions. No intermediaries, no delays - just direct,
                peer-to-peer transactions that empower both artists and
                listeners.
              </p>
            </div>
          </div>
          <div className="border shadow-lg rounded-md p-8 space-y-4">
            <div className="bg-[#4befc4] w-14 rounded-full p-2 shadow-inner border border-[#4befc4]">
              <img src="/images/credit-card.png" alt="cubes" className="" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-600 text-lg">
                Seamless Transactions
              </h3>
              <p className="text-sm">
                Gone are the days of complex payment processes. With crypto
                payments integrated into Web2.5 music streaming, enjoy the
                simplicity of swift and secure transactions. Whether you&apos;re
                subscribing to premium features, supporting your favorite
                artists, or exploring exclusive content, every transaction is as
                smooth as your favorite track&apos;s melody.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:sectionClip bg-gray-50 md:px-12 px-6">
        <h2 className="textGradient md:text-7xl text-4xl font-gilroy text-center font-bold leading-relaxed">
          Empowering Artists
        </h2>
        <p className="md:px-20 pt-4 px-6 text-xl font-semibold text-black/85">
          In an era dominated by digital innovation, the need to empower
          musicians has never been more critical. As the music industry evolves,
          Web2.5 music streaming takes a stand to ensure that artists not only
          survive but thrive in this dynamic landscape. Let&apos;s delve into
          how this revolution is reshaping the way musicians are compensated and
          recognized.
        </p>
        <div className="pt-16 space-y-8">
          <div className="border-b pb-8">
            <h3 className="text-3xl font-bold text-teal-500 mb-3">
              Transparent Transactions
            </h3>
            <p className="text-justify">
              In the traditional music industry, opaque financial structures
              often left artists in the dark about the fate of their earnings.
              Enter blockchain technology - the backbone of transparent
              transactions in Web2.5 music streaming. Blockchain ensures a
              decentralized ledger where every transaction is recorded,
              providing an immutable and publicly accessible record of artist
              compensation. This newfound transparency guarantees that artists
              receive their fair share of the revenue generated by their
              creative endeavors. By embracing blockchain, we usher in an era
              where the mystery surrounding artist compensation is replaced by
              clarity and trust.
            </p>
          </div>
          <div className="border-b pb-8">
            <h3 className="text-3xl font-bold text-[#9c42f5] mb-3">
              Recognition and Rewards
            </h3>
            <p className="text-justify">
              Beyond the financial aspect, Web2.5 music streaming introduces a
              paradigm shift in how artists are recognized and rewarded. No
              longer confined to the limitations of traditional royalties,
              artists now have the opportunity to directly connect with their
              audience. Through innovative features, fans can support their
              favorite musicians more directly - whether it&apos;s through
              exclusive memberships, virtual merchandise, or unique experiences.
              <br />
              By actively participating in supporting artists, listeners become
              integral contributors to the creative process. This newfound
              connection fosters a symbiotic relationship between artists and
              their audience, ensuring that the music ecosystem flourishes. We
              encourage you to explore the diverse ways you can support and
              engage with your favorite musicians, transforming the act of
              streaming music into a collaborative celebration of artistic
              expression. Join us in championing a future where artists receive
              not only fair compensation but also the recognition and rewards
              they truly deserve.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="text-3xl font-bold text-[#4579f5] mb-3">
              Encouraging users to support their favorite musicians
            </h3>
            <p className="text-justify">
              Empower the voices that resonate with you. Choose to actively
              support the musicians who soundtrack your life. Your contribution
              goes beyond a simple transaction - it becomes a catalyst for a
              thriving creative community. Join the movement, engage with
              exclusive content, and be a patron of the arts in the digital age.
              Together, let&apos;s amplify the impact of music and ensure that
              every artist receives the acknowledgment and compensation that
              reflects their talent and dedication. Your support matters -
              become a driving force behind the artists who enrich our lives
              with their incredible soundscapes.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 md:px-12 px-6">
        <h2 className="text-center text-6xl font-gilroy font-extrabold text-cyanSky pb-12">
          Our Artists
        </h2>
        <p className="md:px-20 px-6 text-xl font-semibold text-[#4579f5] text-center">
          Introducing the early adopters & DJ playlists
        </p>
        <div className="flex justify-center flex-wrap gap-8 my-12">
          <Link
            href="/profile/djws"
            className="flex flex-col items-center justify-center"
          >
            <img
              src="https://www.billboard.com/wp-content/uploads/media/Paul-Blair-DJ-White-Shadow-2016-press-billboard-650.jpg?w=650&h=430&crop=1"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">DJWS</h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </Link>
          <Link
            href={'/profile/digiwaxx'}
            className="flex flex-col items-center justify-center"
          >
            <img
              src="https://i.scdn.co/image/ab67656300005f1fcfdafd408c7d2472c46e8ec4"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">Digiwaxx</h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </Link>
          <Link
            href={'/profile/djidem'}
            className="flex flex-col items-center justify-center"
          >
            <img
              src="https://www.ticketcorner.ch/obj/media/CH-eventim/galery/kuenstler/d/dj-idem_01.jpg"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">DJ Idem</h3>
              <h4 className="text-xs font-extralight">Switzerland</h4>
            </div>
          </Link>
          <Link
            href="/profile/willietaylor"
            className="flex flex-col items-center justify-center"
          >
            <img
              src="https://media.licdn.com/dms/image/C4D03AQG5I1C-FzYjfw/profile-displayphoto-shrink_400_400/0/1614882349776?e=1710979200&v=beta&t=qp6m-312zi_zGAeE8aQmPR79TMCm4Xt4djFGgvsayH4"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover object-left"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">
                Willie Taylor
              </h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </Link>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://www.thehypemagazine.com/wp-content/uploads/2023/02/Murph-2.jpg"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#9c42f5] text-sm font-semibold">
                Murphy Lee
              </h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://charts-static.billboard.com/img/1995/02/mystikal-y54-180x180.jpg"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">Mystical</h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </div>
          <Link
            href="/profile/djbenito304"
            className="flex flex-col items-center justify-center"
          >
            <img
              src="https://i.scdn.co/image/ab67706c0000da8479ede4425cadf7e10bfe1308"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover object-left"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">
                DJBenito304
              </h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </Link>
          <Link
            href="/profile/interface"
            className="flex flex-col items-center justify-center"
          >
            <img
              src="https://i.scdn.co/image/ab67616100005174d75610420829741538b36897"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover object-left"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">
                Interface
              </h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </Link>
          <Link
            href="/profile/djgonecrazy"
            className="flex flex-col items-center justify-center"
          >
            <div
              // src="https://i.scdn.co/image/ab67616100005174d75610420829741538b36897"
              // alt="artist"
              className="w-44 h-44 rounded-full bg-black"
            ></div>
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">
                DJGONECRAZY
              </h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </Link>
          <Link
            href="/profile/gallocontennis"
            className="flex flex-col items-center justify-center"
          >
            <img
              src="https://i.scdn.co/image/ab6761610000517460c5a0f1b00bbb6dc2ed9391"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover object-left"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">
                Gallo Con Tennis
              </h3>
              <h4 className="text-xs font-extralight">USA</h4>
            </div>
          </Link>
          <Link
            href="/profile/ramen-gang"
            className="flex flex-col items-center justify-center"
          >
            <img
              src="https://i.scdn.co/image/ab67706c0000da84bd22812f11174682f7add769"
              alt="artist"
              className="w-44 h-44 rounded-full object-cover object-left"
            />
            <div className="flex flex-col justify-center items-center pt-3">
              <h3 className="text-[#9c42f5] text-sm font-semibold">
                🍜 Ramen Gang
              </h3>
              <h4 className="text-xs font-extralight">Mexico</h4>
            </div>
          </Link>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <h2 className="textGradient md:text-7xl text-4xl font-gilroy text-center font-bold leading-relaxed">
          Learn More
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 my-12 gap-8 md:px-12 px-6">
          <a
            rel="noreferrer"
            target="_blank"
            href={
              'https://benitoderosario.medium.com/litepaper-protocolo-trapcard-40164ded17c1'
            }
            className="border shadow-md flex items-center p-4 gap-x-2 group space-y-4 col-span-1 rounded-lg"
          >
            <div className="w-2/5 overflow-hidden rounded-lg h-full">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SuAhTBxHW3bI8f3zRCJn8A.png"
                alt=""
                className="group-hover:scale-105 transition duration-300 w-full h-full object-cover"
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h3 className="forn-bold font-bold text-lg leading-tight">
                LitePaper: Protocolo TrapCard
              </h3>
              <p className="text-xs">
                TrapCard features an innovative mood-based sentiment analysis
                algorithmic playlist and...
              </p>
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href={
              'https://medium.com/@benitoderosario/introducing-tba-tcrs-80d8a7d6950a'
            }
            className="border shadow-md flex items-center p-4 gap-x-2 group space-y-4 col-span-1 rounded-lg"
          >
            <div className="w-2/5 overflow-hidden rounded-lg h-full">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GVIHE4phr30i_TSM0ol-ug.png"
                alt=""
                className="group-hover:scale-105 transition duration-300 w-full object-cover object-left h-full"
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h3 className="forn-bold font-bold text-lg leading-tight">
                Introducing TBA TCRs
              </h3>
              <p className="text-xs">
                In the ever-evolving landscape of blockchain technology and
                decentralized applications, the TrapCard...
              </p>
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href={
              'https://benitoderosario.medium.com/tarjeta-cripto-dinero-b833c98af1f9'
            }
            className="border shadow-md flex items-center p-4 gap-x-2 group space-y-4 col-span-1 rounded-lg"
          >
            <div className="w-2/5 overflow-hidden rounded-lg h-full">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hODvezVHuLI6RSveq-MJZQ.png"
                alt=""
                className="group-hover:scale-105 transition duration-300 w-full object-cover object-left h-full"
              />
            </div>
            <div className="w-3/5 space-y-3">
              <h3 className="forn-bold font-bold text-lg leading-tight">
                Crypto Impact — Music Festivals
              </h3>
              <p className="text-xs">
                Web3 Startups have digital assets, tokens and NFTs, but the
                daily cash flow for business needs...
              </p>
            </div>
          </a>
        </div>
      </section>
      <section className="py-32 bgCta md:px-12 px-6">
        <h2 className="text-white text-6xl font-extrabold font-gilroy">
          Ready to Redefine Your Experience?
        </h2>
        <h4 className="text-4xl mt-12 font-bold md:text-white text-cyan-400">
          Express excitement for the future <br />
          where Web2.5 meets the beat
          <br />
          of the blockchain.
        </h4>
        <div className="py-8 pb-20">
          <Link
            href={'/account/signup'}
            className=" justify-center py-2.5 items-center w-44 gap-x-4 orangeToPink group flex"
          >
            Get Started{' '}
            <p className="group-hover:translate-x-2 text-lg transition-all duration-300 ease-in-out">
              &rarr;
            </p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Docs;
