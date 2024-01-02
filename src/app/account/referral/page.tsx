import CopyReferral from '@/components/CopyReferral';
import { HomeContainer } from '@/components/content';
import { createClient } from '@/utils/supabase/server';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cookies, headers } from 'next/headers';
import React, { useState } from 'react';
import Confetti from 'react-confetti';


export default async function Referral() {
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('referrals')
    .select('referral_code')
    .eq('owner_user_id', user?.id);

  console.log({ data, error });
  const [{ referral_code }] = data as Array<{ referral_code: string }>;



  return (
    <HomeContainer>
      {/* <Confetti width={500} height={500} /> */}
      <div className='pb-40'>
        <div className='max-w-lg w-full bg-black/80 backdrop-blur text-white p-4 rounded-2xl gap-x-8 mx-auto'>
          <h3 className='font-semibold mt-4 text-xl'>360 Beta program </h3>
          <p className='text-sm mt-6 mb-5'>
            <span className='text-teal-500'>$20/Month = $250*</span> a year vs
            referral code discount{' '}
            <span className='text-teal-500'>$99/year</span> early
          </p>
          <div>
            <div className='flex flex-col gap-y-1 mb-4'>
              <label htmlFor='referral_link' className='text-xs text-cyan-400'>
                Referral Url
              </label>
              <CopyReferral referral_code={referral_code} />
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}
