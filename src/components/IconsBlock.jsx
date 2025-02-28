import React, { useState } from 'react'
import { FaInfo } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Heart from './Heart';
import Menu from './Menu'
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";


function IconsBlock() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='text-orange-600 text-2xl flex items-center gap-5'>
            <Menu showMenu={showMenu}  />
            <GiHamburgerMenu className='cursor-pointer block lg:hidden' onClick={() => setShowMenu(!showMenu)} />
            <Heart className='cursor-pointer ' />
            <LanguageSwitcher showMenu={showMenu}  />
        </div>
    )
}

export default IconsBlock