import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu({ showMenu }) {

  return (
    <div className={`animate-pulse gap-5 text-[18px] font-medium mr-6 text-stone-800 flex flex-col lg:flex-row 
    absolute top-[91px] left-0 right-[-35px] pb-25  lg:pt-0 lg:static
     bg-white p-3 lg:p-0 px-[5%] shadow-[0_8px_8px_rgba(231,76,60,0.15)] ${showMenu ? "" : "hidden"}`}>
      <NavLink to="/" className=' hover:text-orange-500 transition-all duration-300'>Menyumuz</NavLink>
      <NavLink to="interior" className=' hover:text-orange-500 transition-all duration-300'>İnteriyer</NavLink>
      <NavLink to="about" className=' hover:text-orange-500 transition-all duration-300'>Haqqımızda</NavLink>
      <NavLink to="contact" className=' hover:text-orange-500 transition-all duration-300'>Əlaqə</NavLink>
    </div>
  )
}

export default Menu