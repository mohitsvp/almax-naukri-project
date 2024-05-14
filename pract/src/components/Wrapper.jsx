import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className=''>
        <div className='h-[80px]'></div>
        {children}
    </div>
  )
}

export default Wrapper