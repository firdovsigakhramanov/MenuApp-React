import React from 'react'

function FoodCard() {
    return (
        <div className='rounded-2xl overflow-hidden w-[262px]  cursor-pointer shadow-[0_8px_20px_rgba(231,76,60,0.15)]
        transition duration-400 transition-transform:transform relative 
        group hover:shadow-none'>
            <div className='rounded-t-2xl overflow-hidden group-hover:scale-103 transition duration-300'>
                <img src="https://theveganplanetkitchen.com/wp-content/uploads/2021/08/IMG_3222.jpg" alt="" />
            </div>
            <div className='p-5 rounded-b-2xl font-primary bg-white group-hover:translate-y-[-7px] transition duration-400'>
                <div className='border-b-1 border-gray-200 '>
                    <h3 className='text-[18px] font-semibold text-gray-700'>Mərci Şorbası</h3>
                    <p className='text-sm text-gray-500 pt-4 pb-3 pr-2'>Ənənəvi Türk mətbəxinin vazkeçilməzi, xüsusi...</p>
                </div>
                <div className='flex justify-between items-center pt-2.5 pb-1'>
                    <div className='text-orange-600 font-bold text-[18px]'>$5.50 AZN</div>
                    <div className='w-fit px-[12px] py-[4px] text-sm rounded-[25px] text-white 
        font-secondary border-orange-600 border-2 cursor-pointer leading-normal bg-orange-600 '>Ətraflı</div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard