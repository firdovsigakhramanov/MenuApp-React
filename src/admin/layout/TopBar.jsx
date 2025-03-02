import React from 'react'
import Logo from '../../components/Logo'
import AdminIcons from '../components/AdminIcons'

function TopBar() {
    return (
        <div className='bg-gray-800 flex font-primary fixed z-99  w-full 
        justify-between shadow-md px-[5%] lg:px-[7%] py-5 
        container-contain'>
            <Logo to="/dashboard" style="logoSecondary">Admin Panel</Logo>
            <AdminIcons/>
        </div>
    )
}

export default TopBar