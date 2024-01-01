import { HomeContainer } from '@/components/content'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Referral = () => {
  return (
    <HomeContainer>
      <div className='pb-40'>
      <div className='max-w-lg w-full bg-black/80 backdrop-blur text-white p-4 rounded-2xl gap-x-8 mx-auto'>
        <h3 className='font-semibold mt-4 text-xl'>360 Beta program </h3>
        <p className='text-sm mt-6 mb-5'>
          <span className='text-teal-500'>$20/Month = $250*</span> a year vs referral code discount <span className='text-teal-500'>$99/year</span> early
        </p>
        <div>
          <div className='flex flex-col gap-y-1 mb-4'>
            <label htmlFor='' className='text-xs text-cyan-400'>
              Referral Url
            </label>
            <div className='w-full bg-white rounded-lg overflow-hidden flex items-center'>
              <input
                type={'text'}
                name=''
                id=''
                value={'360nft.app/er23rx'}
                className='py-2 flex-1 border-r outline-none px-4 text-black'
                placeholder='Password'
              />
              <button className='flex justify-center w-10'>
                <FontAwesomeIcon
                  icon={faCopy}
                  className={'h-4 w-4 text-black'}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      </div>
    </HomeContainer>
  )
}

export default Referral