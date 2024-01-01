'use client'
import React from 'react'
import { signIn } from '@/lib/actions';
import { faCopy, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';

const LoginCn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [state, formAction] = useFormState(signIn, { msg: '' });
    const { pending } = useFormStatus();

    return (
        <div>
            <div className='max-w-2xl w-full flex bg-black/80 backdrop-blur text-white p-4 rounded-2xl gap-x-8 mx-auto'>
                <div className=' w-1/2'>
                    <h2 className='text-4xl mt-4'>Login</h2>
                    {state?.msg && (
                        <p className='text-white text-center'>{state.msg}</p>
                    )}
                    <form action={formAction}>
                        <div className='flex flex-col gap-y-1 my-4'>
                            <label htmlFor='email' className='text-xs text-cyan-400'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                className='py-2 px-4 bg-white rounded-lg text-black'
                                placeholder='Email'
                            />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label htmlFor='password' className='text-xs text-cyan-400'>
                                Password
                            </label>
                            <div className='w-full bg-white rounded-lg overflow-hidden flex items-center'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    className='py-2 border-r outline-none px-4  text-black'
                                    placeholder='••••••••'
                                />
                                <button
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='flex justify-center w-10'
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        className={'h-4 w-4 text-black'}
                                    />
                                </button>
                            </div>
                        </div>
                        <button className='text-xs text-gray-300'>
                            Forgot password?
                        </button>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='greenToPurple py-2 px-6 rounded-xl'
                                disabled={pending}
                            >
                                {pending ? 'Loading...' : 'Log in'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-1/2'>
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
        </div>
    )
}

export default LoginCn