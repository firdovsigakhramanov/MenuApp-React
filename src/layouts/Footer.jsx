import React from 'react'
import { FaClock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


function Footer() {
  return (
    <div className='bg-slate-800 text-white font-primary px-[10%] py-10 mx-auto '>
      <div className='flex justify-between pr-[5%] border-b border-b-gray-600 mb-2.5 py-8'>
        <div>
          <p className='flex gap-3 items-center font-bold text-xl'><FaClock className='text-orange-600' /><span>İş Saatları</span></p>
          <div className='mt-4 space-x-2'>
            <p className='text-[16px]'>Həftəiçi: 09:00 - 22:00</p>
            <p className='text-[16px]'>Həftəiçi: 09:00 - 22:00</p>
          </div>
        </div>
        <div>
          <p className='flex gap-3 items-center font-bold text-xl'><FaPhoneAlt className='text-orange-600' /><span>İş Saatları</span></p>
          <div className='mt-4 space-x-2'>
            <p className='text-[16px]'>Tel: (012) 555 55 55</p>
            <p className='text-[16px]'>Email: info@lezzetduragi.az</p>
          </div>
        </div>
        <div>
          <p className='flex gap-3 items-center font-bold text-xl'><FaLocationDot className='text-orange-600' /><span>İş Saatları</span></p>
          <div className='mt-4 space-x-2'>
            <p className='text-[16px]'> Ləzzət Küçəsi No:1 Bakı / Azərbaycan</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center pt-8'>
        <p>© 2024 Ləzzət Durağı - Bütün Hüquqlar Qorunur</p>
      </div>
    </div>
  )
}

export default Footer