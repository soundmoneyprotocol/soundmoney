import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
     <div className='md:mt-24 mt-8'>
          <div className='relative'>
              <div className='w-full relative h-[13rem]'>
                  {/* <Image fill src="/images/KRK.png" alt="" className='object-cover' /> */}
                  <div className='w-full h-full bg-[#9a1b5e]'></div>
              </div>
              <div className='absolute -bottom-12 left-12'>
                  <img src='https://i.scdn.co/image/ab67656300005f1fcfdafd408c7d2472c46e8ec4' className='w-32 h-32 rounded-full orangeToPink'></img>
              </div>
          </div>
          <div className='px-8 flex-wrap flex gap-8 items-stretch h-full'>
              <div className='pt-16'>
                  <a
                      target='_blank'
                      href='https://open.spotify.com/show/18scUMwuJY6dtN8URsqXMB?si=e2567a5e18d24a3e'
                      className='text-xl font-bold hover:text-cyan-500 text-cyan-600 duration-200'>
                      @Digiwaxx
                  </a>
                  <p className='text-sm lg:max-w-96 text-justify leading-tight pt-5'>Digiwaxx Media is an independent marketing and promotions agency specializing in the new urban culture. With music at the core of this culture, Digiwaxx is situated where things really happen now: at the intersection of recording studios, radio stations, DJ booths, concert venues and online sites where creative innovators, cultural influencers, entrepreneurs and fans converge.</p>
              </div>
              <div className='bg-gray-50 flex-1 self-stretch py-8 px-6 h-full pb-52'>
                  <h2 className='font-extrabold text-2xl text-slate-500'>My playlists</h2>
                  <div className='mt-6'>
                      <iframe src="https://open.spotify.com/embed/playlist/4lnQK6siBjE1Jr42MUB0Gr?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Page