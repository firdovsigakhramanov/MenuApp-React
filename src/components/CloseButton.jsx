import React from 'react'
import { IoClose } from "react-icons/io5";

function CloseButton({ setShowModal }) {
    return (
        <div onClick={() => { setShowModal(false) }} className='rounded-full hover:bg-orange-600 hover:text-white absolute top-5 right-5 w-[35px] h-[35px] 
                                   flex justify-center items-center cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.2)] 
                                   transition duration-300 transform hover:rotate-90 z-2'>
            <IoClose />
        </div>
    )
}

export default CloseButton