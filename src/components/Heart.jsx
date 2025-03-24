import React from 'react'
import { FaHeart } from "react-icons/fa";
import { useFoods } from '../context/MenuContext';
function Heart() {
    const { setShowSidebar } = useFoods()
    return (
        <div onClick={() => (setShowSidebar(true))} className='relative cursor-pointer'>
            <div className='bg-gray-800 rounded-full w-[20px] h-[20px] flex 
            justify-center items-center text-sm text-gray-50 absolute -top-2.5 -right-2.5'>
                2
            </div>
            <FaHeart />
        </div>
    )
}

export default Heart