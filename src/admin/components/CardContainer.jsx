import React from 'react'

function CardContainer({ children }) {
    return (
        <div className='flex flex-wrap gap-6'>{children}</div>
    )
}

export default CardContainer