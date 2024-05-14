import React from 'react'
import { authBannerFeatures } from '../../utils/constants'
import { FaRegCheckCircle } from "react-icons/fa";


const AuthBanner = () => {
  return (
    <div className='border rounded-md shadow-lg bg-white text-center px-2 py-5'>
        <div>
            <div className='w-[60%] m-auto'><img src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png" alt="" className='w-[200px] h-[200px]'/></div>
            <div>
                <p className='font-bold'>On Registering you can</p>
            </div>
            <div className='my-5'>
                {
                    authBannerFeatures.map((feature) => (
                        <div className='flex items-center gap-2' key={feature.id}>
                            <div><FaRegCheckCircle className='text-green-500'/></div>
                            <div className='text-[12px]'>{feature.text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AuthBanner