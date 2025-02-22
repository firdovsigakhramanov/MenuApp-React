import React from 'react'
import { FaHeart } from "react-icons/fa";

function Button({ children, selected, style, type }) {
    const styles = {
        primary: "w-fit md:px-5 md:py-2 px-3 py-1 rounded-[25px] text-orange-600 font-secondary border-orange-600 border-2 cursor-pointer hover:bg-orange-600 hover:text-white transition duration-400 transition-transform:transform hover:translate-y-[-2px] leading-normal",
        secondary: "w-fit text-white font-secondary text-sm  bg-orange-600 flex justify-center items-center py-[10px] px-[15px] gap-1 rounded-sm cursor-pointer hover:scale-103 transition duration-300",
        third: "w-fit text-white font-secondary text-sm  bg-orange-700 flex justify-center items-center py-[10px] px-[15px] gap-1 rounded-sm cursor-pointer hover:scale-103 transition duration-300",
        fourth:"w-full px-[20px] py-[8px] mt-4 rounded-[25px] font-secondary border-orange-600 border-2 cursor-pointer bg-orange-600 text-white transition duration-400 transition-transform:transform hover:translate-y-[-2px] leading-normal"
    }

    if (type) return (<button className={styles[style]} type={type}>
        {children}
    </button>)


    return (
        <div className={styles[style]}>
            {style === "secondary" ? <>
                <FaHeart />{children}
            </> : children}
        </div>
    )
}

export default Button