import React from 'react'
import { useFoods } from '../context/MenuContext'

function FoodCard({ food }) {
    const { setShowDetails, setFoodDetails } = useFoods()
    function productClick() {
        setShowDetails(true)
        setFoodDetails(food)
    }
    return (
        <div className='rounded-2xl overflow-hidden md:w-[262px] w-80  bg-white cursor-pointer shadow-[0_8px_20px_rgba(231,76,60,0.15)]
        transition duration-400 transition-transform:transform relative 
        group hover:shadow-none'>
            <div className='rounded-t-2xl h-50 overflow-hidden group-hover:scale-103 transition duration-300'>
                <img className='w-full h-full object-cover' src={food.image} alt="" />
            </div>
            <div className='md:p-5 p-3.5 rounded-b-2xl font-primary bg-white group-hover:translate-y-[-7px] transition duration-400'>
                <div className='border-b-1 border-gray-200'>
                    <h3 className='text-[18px] font-semibold text-gray-700'>{food.name}</h3>
                    <p className='text-sm text-gray-500 pt-4 pb-3 pr-2'>{food.description}</p>
                </div>
                <div className='flex justify-between items-center pt-2.5 pb-1'>
                    <div className='text-orange-600 font-bold md:text-[18px] text-[16px]'>$5.50 AZN</div>
                    <div onClick={productClick} className='w-fit md:px-[12px] px-[10px] py-[3px] md:py-[4px] text-sm rounded-[25px] text-white 
        font-secondary border-orange-600 border-2 cursor-pointer leading-normal bg-orange-600 '>Ətraflı</div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard