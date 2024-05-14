import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = ({children}) => {
  return (
    <div className="">
        <div className='h-[60px]'></div>
        <ToastContainer/>
        <div>{children}</div>
    </div>
  )
}

export default Wrapper