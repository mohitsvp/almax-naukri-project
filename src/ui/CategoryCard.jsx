import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


const CategoryCard = ({CategoryIcon, categoryText, categoryLink}) => {
  return (
    <Link to={categoryLink}>
        <div className='flex p-5 border rounded-md justify-between w-[150px] items-center'>
            <div><CategoryIcon/></div>
            <div>
                {categoryText}
            </div>
            <div>
                <IoIosArrowForward/>
            </div>
        </div>
    </Link>
  )
}

export default CategoryCard