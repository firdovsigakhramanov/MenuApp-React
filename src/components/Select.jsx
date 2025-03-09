import React from 'react'

function Select({ data }) {
    return (
        <select className='px-4 py-2 border border-gray-300 rounded-full outline-orange-600 w-full transition duration-400'>
            {
                data.map(item => (<option key={item.id}>{item.title}</option>))
            }
        </select>
    )
}

export default Select