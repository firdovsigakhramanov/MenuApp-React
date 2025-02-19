import React from 'react'

function Label({ children }) {
    return (
        <div className='w-fit px-[15px] py-[4px] rounded-[25px]
        font-primary text-sm text-medium bg-orange-600 text-white'>{children}</div>
    )
}

export default Label