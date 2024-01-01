import LoginCn from '@/components/LoginCn';
import { HomeContainer } from '@/components/content';
import { signIn } from '@/lib/actions';
import { faCopy, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';

const Login = () => {

    return (
        <HomeContainer>
            <div className='pb-40'>
                <LoginCn />
            </div>
        </HomeContainer>
    )
}

export default Login