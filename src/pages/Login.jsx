import React from 'react'
import Logo from '../components/Logo'
import SectionTitle from '../components/SectionTitle'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Button from '../components/Button';


function Login() {
  return (
    <div className='px-[10%] flex justify-center pt-[25%] md:pt-[10%]  font-primary'>
      <div className='w-[400px] bg-white py-10 px-8 rounded-xl shadow-2xl'>
        <div className='flex justify-center items-center flex-col gap-4'>
          <Logo />
          <h3 className='text-center text-xl font-bold'>Admin Girişi</h3>
        </div>
        <form action="" className='flex flex-col gap-4 mt-5'>
          <div className='flex items-center gap-3 border border-gray-300
         focus-within:py-[7.2px] focus-within:px-[11px]
           focus-within:border-orange-600 focus-within:border-2 rounded-full transition duration-400 py-2 px-3'>
            <FaUser className='text-gray-600' />
            <input className='outline-none w-full' type="text" placeholder='İstifadəçi Adı' />
          </div>
          <div className='flex items-center gap-3 border border-gray-300  py-2 px-3 
          focus-within:py-[7.2px] focus-within:px-[11px]
          focus-within:border-orange-600 focus-within:border-2 rounded-full transition duration-400'>
            <FaLock className='text-gray-600' />
            <input className='outline-none w-full' type="password" placeholder='Şifrə' />
          </div>
          <div>
            <Button style="fourth" type="submit">Daxil Ol</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login