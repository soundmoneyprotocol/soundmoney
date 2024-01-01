import { HomeContainer } from '@/components/content';
import { RegisterButton } from '@/components/inputs/button'
import { signUp } from '@/lib/actions'
import React from 'react'

const Signup = ({
    searchParams,
}: {
    searchParams: { msg: string };
}) => {
    return (
        <HomeContainer>
            <section className=' pb-40 px-20'>
                <div className='rounded-3xl shadow-lg greenToPurple p-6 max-w-xl mx-auto'>
                    <h3 className='text-4xl font-black mb-5'>Get early access</h3>
                    {searchParams.msg && (
                        <p className='mt-4 p-4 text-black text-center'>
                            {searchParams.msg}
                        </p>
                    )}
                    <form action={signUp}>
                        <div className='space-y-2 text-black'>
                            <input
                                type='email'
                                name='email'
                                className='bg-white py-2.5 rounded-lg px-4 w-full mb-5'
                                placeholder='you@example.com'
                                required
                            />
                            <input
                                type='password'
                                className='bg-white py-2.5 rounded-lg px-4 w-full mb-5'
                                name='password'
                                placeholder='••••••••'
                                required
                            />
                        </div>
                        <div className='w-full mt-2'>
                            <RegisterButton />
                            <button type='button' className='text-gray-300 text-sm mt-4'>
                                Signed Up before? Check your status
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </HomeContainer>
    )
}

export default Signup