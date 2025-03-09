import React from 'react'

function SectionTitle({ children, style }) {
    const base = "relative font-primary  font-bold text-gray-700"
    const styles = {
        primary: "text-center after:content-[''] text-[40px] after:block after:w-16 after:h-1 after:bg-red-500 after:mt-2 after:mx-auto mb-10 " + base,
        secondary: base + " text-[40px]",
        third: base + " text-xl"
    }
    return (
        <h3 className={styles[style]}>
            {children}
        </h3>
    )
}

export default SectionTitle