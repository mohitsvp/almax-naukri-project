import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { footerLinks } from '../../utils/constants';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='my-10'>
        <div className='flex w-[60%] m-auto gap-10'>
            <div>
                <div><img src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg" alt="" /></div>
                <div className='my-7'>
                    <div><p className='text-[10px] font-bold'>Connect with us</p></div>
                    <div className='flex gap-2 my-2'>
                        <TiSocialTwitter/>
                        <TiSocialTwitter/>
                        <TiSocialTwitter/>
                        <TiSocialTwitter/>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 text-[12px] gap-4'>
                {
                    footerLinks.map((link) => (
                        <Link to={link.path} key={link.id}>{link.name}</Link>
                    ))
                }
            </div>
            <div className='border p-2 flex flex-col justify-between'>
                <div>
                    <p>Apply on the Go</p>
                    <p>Get real-time job updates on our App</p>
                </div>
                <div className='flex gap-4'>
                    <img src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app_v1.png" alt="" />
                    <img src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app_v1.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer