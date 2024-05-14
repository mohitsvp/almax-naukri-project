import React from 'react'
import Input from './Input'
import Button from './Button'
import { FaSearch } from "react-icons/fa";


const MainSearch = () => {
  return (
    <div className='bg-white py-2 px-5 rounded-full flex justify-between items-center shadow-xl'>
        <FaSearch className='text-[24px]'/>
        <Input type={"text"} placeholder={"Enter Skills"}/>
        <Input type={"number"} placeholder={"Enter Experience"}/>
        <Input type={"text"} placeholder={"Enter Location"}/>
        <Button primaryColor={"white"} backgroundColor={"#285df5"}>Search</Button>
    </div>
  )
}

export default MainSearch