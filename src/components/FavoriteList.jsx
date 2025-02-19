import React from 'react'
import FavoriteListItem from './FavoriteListItem'


function FavoriteList() {
    return (
        <ul className='flex flex-col px-4 py-5'>
            <FavoriteListItem />
            <FavoriteListItem />
        </ul>
    )
}

export default FavoriteList