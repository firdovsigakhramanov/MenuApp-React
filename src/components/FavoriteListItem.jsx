import React from 'react'
import { FaTrash } from "react-icons/fa";

function FavoriteListItem() {
    return (
        <li className='flex justify-between py-4 px-5 border-b-1 border-gray-200'>
            <div className='flex gap-4 '>
                <div>
                    <img className='w-[80px] h-[80px] object-cover rounded-[10px]' src="https://lent.az/storage/news/2024/february/27/big/65dd90073ebf865dd90073ebf9170901914365dd90073ebf665dd90073ebf7.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-2 font-primary '>
                    <h3 className='text-base font-bold'>Mərci Şorbası</h3>
                    <p className='font-normal text-sm text-gray-600'>Şorbalar</p>
                    <span className='text-sm text-gray-600 font-bold'>₼ 5.50 AZN</span>
                </div>
            </div>
            <div className='flex items-center text-orange-600 text-lg'>
                <FaTrash className='cursor-pointer' />

            </div>

        </li>
    )
}

export default FavoriteListItem