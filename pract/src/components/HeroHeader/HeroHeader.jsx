import React from 'react'
import MainSearch from '../../ui/MainSearch'

const HeroHeader = () => {
  return (
    <div>
        <div className='w-[50%] m-auto my-[50px] leading-relaxed'>
            <h1 className='text-[40px] text-center font-bold'>Find your dream job now</h1>
            <p className='text-[20px] text-center'>5 lakh+ jobs for you to explore</p>
        </div>
        <div className='m-auto'>
            <MainSearch/>
        </div>
    </div>
  )
}

export default HeroHeader