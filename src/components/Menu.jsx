import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='hidden gap-5 text-[18px] font-medium mr-6 text-stone-800 lg:flex '>
      <NavLink to="/" className=' hover:text-orange-500 transition-all duration-300'>Menyumuz</NavLink>
      <NavLink to="interior" className=' hover:text-orange-500 transition-all duration-300'>İnteriyer</NavLink>
      <NavLink to="about" className=' hover:text-orange-500 transition-all duration-300'>Haqqımızda</NavLink>
      <NavLink to="contact" className=' hover:text-orange-500 transition-all duration-300'>Əlaqə</NavLink>
    </div>
  )
}

export default Menu