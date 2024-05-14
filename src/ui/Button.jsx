import React from 'react'

const Button = ({children, primaryColor, backgroundColor, borderColor}) => {

    const buttonStyles = {
        color : primaryColor,
        backgroundColor,
        border : `1px solid ${borderColor}`
    }

  return (
    <button style={buttonStyles} className='rounded-full px-2 py-1'>{children}</button>
  )
}

export default Button