import React from 'react'
import { FaHeartBroken } from "react-icons/fa";


function NonFavorite() {
    return (
        <div className='flex justify-center items-center flex-col pt-70 font-primary gap-4'>
            <FaHeartBroken className='text-5xl text-orange-600' />
            <span className='text-gray-600'>Hələ ki, favori məhsulunuz yoxdur.</span>
        </div>
    )
}

export default NonFavorite