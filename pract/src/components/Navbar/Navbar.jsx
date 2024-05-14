import React from 'react'
import { navLinks } from '../../utils/constants'
import { Link } from "react-router-dom";
import Button from '../../ui/Button';


const Navbar = () => {
  return (
    <nav className='py-5 bg-white fixed w-full'>
        <div className='w-[60%] m-auto flex items-center justify-between'>
            <div className='flex items-center w-[50%]'>
                <Link to={"/"}>
                    <div>
                        <img src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg" alt="" />
                    </div>
                </Link>
                <div className='flex justify-between w-[50%] mx-10'>
                    {
                        navLinks.map((link) => (
                            <Link to={link.path} key={link.id}>
                                <div>{link.name}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='flex items-center w-[30%] justify-between'>
                <div className=' flex gap-[10px]'>
                    <Button primaryColor={"#285df5"} secondaryColor={"#285df5"}>Login</Button>
                    <Button primaryColor={"white"} backgroundColor={"#f05537"}>Register</Button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar