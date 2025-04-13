import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import NonFavorite from './NonFavorite';
import FavoriteList from './FavoriteList';
import { useFoods } from '../context/MenuContext';
import { Link } from 'react-router-dom';


function Sidebar() {
    const { showSidebar, setShowSidebar } = useFoods()
    return (
        <>
            <div className={`h-dvh bg-white shadow-md  md:w-[420px] w-full fixed right-0 top-0 z-105 
                transition-all duration-500 ${showSidebar ? "right-0" : "right-[-500px]"}`} >
                <div className='flex items-center justify-between bg-gray-100 px-5 py-5 font-primary font-bold text-xl text-gray-800'>
                    <div className='flex items-center gap-2'>
                        <FaHeart />
                        <span>Favoritlərim</span>
                    </div>
                    <IoClose onClick={() => { setShowSidebar(false) }} className=' text-2xl font-bold cursor-pointer' />
                </div>
                <FavoriteList />
            </div>
        </>

    )
}

export default Sidebar