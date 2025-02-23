import React from 'react'

function SectionTitle({ children }) {
    return (
        <h3 class="relative font-primary text-[40px]  font-bold text-gray-700 text-center after:content-[''] after:block after:w-16 after:h-1 after:bg-red-500 after:mt-2 after:mx-auto mb-10">
            {children}
        </h3>
    )
}

export default SectionTitle