import React from 'react'
import { FaHeart } from "react-icons/fa";

function Button2() {
    return (
        <div className='w-fit text-white font-secondary text-sm  bg-orange-600 flex justify-center items-center
     py-[10px] px-[15px] gap-1 rounded-sm cursor-pointer hover:scale-103 transition duration-300'>
            <FaHeart /><span>Favoritlərə Əlavə Et</span>
        </div>
    )
}

export default Button2