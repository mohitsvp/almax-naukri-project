import React from 'react'

const Input = ({type, placeholder, value}) => {
  return (
    <input type={type} placeholder={placeholder} className='p-2 outline-none'/>
  )
}

export default Input