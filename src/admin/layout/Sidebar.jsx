import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { PiPlusBold } from "react-icons/pi";
import { BiSolidCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

function Sidebar() {
  const baseItemsStyle = " flex items-center gap-3 text-gray-800 rounded-[8px] py-3 px-4 shadow-sm hover:bg-orange-600 hover:text-white transition-all duration-500 ease-in-out"
  return (
    <nav className='flex flex-col w-[20%] gap-4 fixed'>
      <NavLink to="menumanage" className={({ isActive }) =>
        isActive ? baseItemsStyle + " bg-orange-600 text-white" : baseItemsStyle + " bg-white"
      }>
        <span>
          <FiMenu />
        </span>
        Menyu İdarəsi
      </NavLink>

      <NavLink to="newproduct" className={({ isActive }) =>
        isActive ? baseItemsStyle + " bg-orange-600 text-white" : baseItemsStyle + " bg-white"
      }>
        <span>
          <PiPlusBold />
        </span>
        Yeni Məhsul Əlavə Et
      </NavLink>

      <NavLink to="editcategory" className={({ isActive }) =>
        isActive ? baseItemsStyle + " bg-orange-600 text-white" : baseItemsStyle + " bg-white"
      }>
        <span>
          <BiSolidCategory />
        </span>
        Kateqoriyalar
      </NavLink>

      <NavLink to="users" className={({ isActive }) =>
        isActive ? baseItemsStyle + " bg-orange-600 text-white" : baseItemsStyle + " bg-white"
      }>
        <span>
          <FaUsers />
        </span>
        İstifadəçilər
      </NavLink>
    </nav >
  )
}

export default Sidebar