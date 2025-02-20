import React from 'react'
import { IoClose } from "react-icons/io5";
import Label from './Label';
import Button from './Button';


function ProductDeatils() {
    return (
        <div className='flex justify-center items-center hidden'>
            <div className='fixed top-0 left-0 right-0 bottom-0 z-100  bg-black opacity-90'>
            </div>
            <div className='flex w-[60%] h-[70%] fixed top-[12%]  mx-auto z-101 bg-white rounded-3xl overflow-hidden'>
                <div className='w-[50%] overflow-hidden '>
                    <img className='w-[100%] h-[100%] object-cover  hover:scale-105
                    trasition duration-500 ' src="https://lent.az/storage/news/2024/february/27/big/65dd90073ebf865dd90073ebf9170901914365dd90073ebf665dd90073ebf7.jpg" alt="" />
                </div>
                <div className='w-[50%] relative p-[40px] font-primary'>
                    <div className='rounded-full hover:bg-orange-600 hover:text-white absolute top-5 right-5 w-[35px] h-[35px] 
                    flex justify-center items-center cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.2)] 
                    transition duration-300 transform hover:rotate-90'>
                        <IoClose />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Label>Şorbalar</Label>
                        <h3 className='font-bold text-4xl text-gray-700'>Mərci Şorbası</h3>
                        <div className='text-gray-500 mb-4'>Ənənəvi Türk mətbəxinin vazkeçilməzi, xüsusi ədviyyatlarla zənginləşdirilmiş mərci şorbası</div>
                        <span className='text-orange-600 font-bold text-[32px] mb-3'>₼5.50 AZN</span>
                        <Button type="secondary">Favoritlərə Əlavə Et</Button>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default ProductDeatils