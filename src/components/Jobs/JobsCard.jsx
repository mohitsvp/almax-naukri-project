import React, { useState } from 'react'
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";



const JobsCard = ({title, companyName, experience, location, description, datePosted}) => {
  return (
    <div className='w-[80%] m-auto bg-white my-[20px] p-4 rounded-[12px] flex flex-col gap-1'>
        <p className='text-[20px] font-bold'>{title}</p>
        <p className='text-gray-500'>{companyName}</p>
        <div className='flex gap-2'>
            <div className='flex items-center gap-2'>
                <IoBriefcaseOutline/>
                {experience}
            </div>
            
            <div>|</div>
            <div className='flex items-center gap-2'>
                <IoLocationOutline/>
                {location}
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <FaRegNoteSticky/>
            {description.substring(0, 50)}
        </div>
        <div>
            <p className='text-[12px] text-gray-500'>{datePosted}</p>
        </div>
    </div>
  )
}

export default JobsCard