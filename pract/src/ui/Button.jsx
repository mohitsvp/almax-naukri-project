import React from 'react'


const Button = ({children, primaryColor, secondaryColor, backgroundColor}) => {

    const buttonStyles = {
        color : primaryColor,
        backgroundColor,
        border: `1px solid ${secondaryColor}`,
        padding : "5px 20px"
    }

  return (
   <button style={buttonStyles} className='rounded-full'>{children}</button>
  )
}

export default Button