import React from 'react'


function ContactLabel({ children, content }) {
    return (
        <div className='flex items-center gap-2 text-[22px]'>
            <div className='p-4 rounded-full
        font-primary text-sm text-medium bg-orange-600 text-white'>
                {children}
            </div>
            <span className='text-gray-700'>{content}</span>
        </div>
    )
}

export default ContactLabel