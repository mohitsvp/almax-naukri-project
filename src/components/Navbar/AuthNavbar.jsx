import React from 'react'
import NavLogo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'

const AuthNavbar = () => {
  return (
    <nav className='h-[60px] bg-white fixed w-full items-center flex'>
        <div className='flex items-center w-[60%] m-auto justify-between'>
        <div className="flex w-[50%] items-center justify-between">
          <Link to="/">
            <div>
              <img
                src={NavLogo}
                alt="Naukri Logo"
              />
            </div>
          </Link>
        </div>
        <div>
            Already Registered? <Link to="/login"><span className='text-blue-800 font-bold'>Login</span></Link> here
        </div>
        </div>
    </nav>
  )
}

export default AuthNavbar