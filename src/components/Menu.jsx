import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu({ showMenu }) {

  return (
    <div className={` gap-5 text-[18px] font-medium mr-6 text-stone-800 flex flex-col lg:flex lg:flex-row z-2
     lg:p-0 lg:static lg:shadow-none shadow-[0_8px_8px_rgba(231,76,60,0.15)] absolute left-0  right-[-35px] pb-22 sm:pb-8
     bg-white p-3 px-[5%] transition-all duration-1000 ease-in-out   ${showMenu ? " top-[91px] " : "  -top-[1000px] "}`}>
      <NavLink to="/" className=' hover:text-orange-500 transition-all duration-300'>Menyumuz</NavLink>
      <NavLink to="interior" className=' hover:text-orange-500 transition-all duration-300'>İnteriyer</NavLink>
      <NavLink to="about" className=' hover:text-orange-500 transition-all duration-300'>Haqqımızda</NavLink>
      <NavLink to="contact" className=' hover:text-orange-500 transition-all duration-300'>Əlaqə</NavLink>
    </div>
  )
}

export default Menu