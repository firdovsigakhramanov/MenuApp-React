import React from 'react'
import { FaList } from 'react-icons/fa'
import { RiBowlFill } from 'react-icons/ri'
import Button from '../../components/Button'
import Label from './Label'

function Card() {
    return (
        <div className='flex flex-col items-center gap-3 rounded-[10px] w-[255px] bg-white p-6 shadow-[0_8px_20px_rgba(231,76,60,0.15)]
         transition duration-400 transition-transform:transform relative hover:-translate-y-1'
        >
            <Label style="manager" />
            <h3 className='text-xl font-medium'>Rehimqahramanov</h3>
            <div className='flex gap-2 items-center text-gray-600'>
                rehim123
            </div>
            <div className='flex gap-2'>
                <Button style="editButton" />
                <Button style="deleteButton" />
            </div>
        </div>
    )
}

export default Card