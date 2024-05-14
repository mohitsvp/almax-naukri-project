import React from 'react'

const Input = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className='outline-none' />
  )
}

export default Input