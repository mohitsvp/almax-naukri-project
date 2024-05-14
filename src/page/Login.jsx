import React from 'react'
import AuthBanner from '../components/Auth/AuthBanner'
import RegisterForm from '../components/Auth/RegisterForm'
import LoginForm from '../components/Auth/LoginForm'

const Register = () => {
  return (
    <div className='px-5 py-10'>
        <div className='w-[80%] border m-auto flex gap-10'>
            {/* left div */}
            <div>
                <AuthBanner/>
            </div>
            {/* right div */}
            <div className='w-[80%]'>
                <LoginForm/>
            </div>
        </div>
    </div>
  )
}

export default Register