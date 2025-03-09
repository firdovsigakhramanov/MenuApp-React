import React from 'react'
import SectionTitle from '../components/SectionTitle';
import { IoClose } from "react-icons/io5";
import CloseButton from '../components/CloseButton';


function Modal({ children, formTitle, setShowModal, showModal }) {
    return (
        <div className='overflow-y-auto fixed pb-5 bottom-0  right-0 left-0 top-0  z-101 flex justify-center pt-[6%] backdrop-brightness-50 '>
            <div className='bg-white px-7 pt-12 pb-10 rounded-xl h-fit w-[90%] md:w-[60%]  lg:w-[33%] relative'>
                <div>
                    <CloseButton setShowModal={setShowModal} />
                    <SectionTitle style="third">{formTitle}</SectionTitle>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal