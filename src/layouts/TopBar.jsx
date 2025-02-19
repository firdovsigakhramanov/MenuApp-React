import React from 'react'
import Logo from '../components/Logo'
import IconsBlock from '../components/IconsBlock'

function TopBar() {
    return (
        <div className='flex font-primary fixed z-99 bg-white w-full 
        justify-between shadow-md px-[5%] md:px-[7%] lg:px-[10%] py-7 
        container-contain'>
            <Logo />
            <IconsBlock />
        </div>
    )
}

export default TopBar