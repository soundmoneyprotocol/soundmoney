import Image from 'next/image'
import React from 'react'

const WillieTaylor = () => {
    return (
        <div className='mt-24'>
            <div className='relative'>
                <div className='w-full relative h-[13rem]'>
                    <Image fill src="/images/willie.jpg" alt="" className='object-cover' />
                </div>
                <div className='absolute -bottom-8 left-12'>
                    <div className='w-20 h-20 rounded-full orangeToPink'></div>
                </div>
            </div>
            <div className='px-8 pt-16'>
                <h2 className='text-xl font-bold'>Willie Taylor - Write My wrongs</h2>
            </div>
        </div>
    )
}

export default WillieTaylor