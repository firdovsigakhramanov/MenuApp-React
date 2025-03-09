import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ContactLabel from '../components/ContactLabel'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';


function Contact() {
    return (
        <div className='px-[10%] pt-[25%] md:pt-[10%] font-primary'>
            <SectionTitle style="primary">Bizimlə Əlaqə</SectionTitle>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <ContactLabel content="(+99470) 536-98-09"><FaPhoneAlt className='text-xl' /></ContactLabel>
                    <ContactLabel content="info@menu.az"><IoMdMailOpen className='text-xl' /></ContactLabel>
                    <ContactLabel content="Baku, Azərbaycan"><FaLocationDot className='text-xl' /></ContactLabel>
                </div>
                <div className='flex gap-10 mt-14'>
                    <ContactForm/>
                    <Map/>
                </div>
            </div>
        </div>
    )
}

export default Contact