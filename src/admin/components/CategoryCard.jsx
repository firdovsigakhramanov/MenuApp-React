import React from 'react'
import { RiBowlFill } from "react-icons/ri";
import { FaList } from "react-icons/fa6";
import Button from '../../components/Button';


function CategoryCard() {
    return (
        <div className='flex flex-col items-center gap-3 rounded-[10px] w-[255px] bg-white p-6  shadow-[0_8px_20px_rgba(231,76,60,0.15)]
         transition duration-400 transition-transform:transform relative hover:-translate-y-1'
        >
            <div className='w-16 h-15 bg-orange-600 flex justify-center 
            items-center rounded-full text-white text-2xl'
            >
                <RiBowlFill />
            </div>
            <h3 className='text-xl font-medium'>Sorbalar</h3>
            <div className='flex gap-2 items-center text-gray-600'>
                <div className='flex items-center gap-1'>
                    <FaList />
                    <span>0</span>
                </div>
                <p>məhsul</p>
            </div>
            <div className='flex gap-2'>
                <Button style="editButton" />
                <Button style="deleteButton" />
            </div>
        </div>
    )
}

export default CategoryCard