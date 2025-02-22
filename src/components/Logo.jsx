import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/" className='flex items-center gap-2 text-3xl text-orange-600 font-bold'>
            <ImSpoonKnife />
            <span>Ləzzət Durağı</span>
        </Link>
    )
}
 
export default Logo