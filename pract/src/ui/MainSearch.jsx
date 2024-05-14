import React from 'react'
import { CiSearch } from "react-icons/ci";
import Button from './Button';
import Input from './Input';


const MainSearch = () => {
  return (
    <div className='m-auto w-[50%] border rounded-full h-[60px] bg-white flex items-center p-5 gap-5 justify-between shadow-xl'>
        <div><CiSearch className='text-[24px]'/></div>
        <Input type={"text"} placeholder={"Enter Skills | Designations | Companies"}/>
        <Input type={"number"} placeholder={"Enter Experience"}/>
        <Input type={"text"} placeholder={"Enter Location"}/>
        <Button primaryColor={"white"} backgroundColor={"#285df5"}>Search</Button>
    </div>
  )
}

export default MainSearch