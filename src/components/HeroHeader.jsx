import React from 'react'
import MainSearch from '../ui/MainSearch'

const HeroHeader = () => {
  return (
    <div>
        <div className='w-[60%] m-auto my-10'>
            <div className=''>
                <p className='font-bold text-[32px] text-center'>Find your dream job now</p>
                <p className='text-center'>5 lakh+ jobs for you to explore</p>
            </div>
            <div className='my-10'>
                <MainSearch/>
            </div>
        </div>
    </div>
  )
}

export default HeroHeader