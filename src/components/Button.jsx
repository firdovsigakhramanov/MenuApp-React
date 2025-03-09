import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function Button({ children, selected, style, type, to, onClick, icon }) {
    const styles = {
        primary: "w-fit md:px-4 md:py-1.8 px-3 py-1 rounded-[25px] text-orange-600 font-secondary border-orange-600 border-2 cursor-pointer hover:bg-orange-600 hover:text-white transition duration-400 transition-transform:transform hover:translate-y-[-2px] leading-normal",
        secondary: "w-fit text-white font-secondary text-sm  bg-orange-600 flex justify-center items-center py-[10px] px-[15px] gap-1 rounded-sm cursor-pointer hover:scale-103 transition duration-300",
        third: "w-fit text-white font-secondary text-sm  bg-orange-700 flex justify-center items-center py-[10px] px-[15px] gap-1 rounded-sm cursor-pointer hover:scale-103 transition duration-300",
        fourth: "w-full px-[20px] py-[8px] mt-4 rounded-[25px] font-secondary border-orange-600 border-2 cursor-pointer bg-orange-600 text-white transition duration-400 transition-transform:transform hover:translate-y-[-2px] leading-normal",
        fifth: "w-fit px-[20px] py-[8px] mt-4 rounded-[25px] font-secondary border-orange-600 border-2 cursor-pointer bg-orange-600 text-white transition duration-400 transition-transform:transform hover:translate-y-[-2px] leading-normal",
        addButton: "w-fit px-[20px] py-[8px] mt-4 rounded-[25px] font-secondary border-orange-600 border-2 cursor-pointer bg-orange-600 text-white transition duration-400 transition-transform:transform hover:translate-y-[-2px] leading-normal flex items-center gap-3",
        editButton: "bg-blue-500",
        deleteButton: "bg-orange-600"
    }

    if (type) return (<button onClick={onClick} className={styles[style]} type={type}>
        {children}
    </button>)

    if (to) return (
        <Link onClick={onClick} to={to} className={styles[style]}>{children}</Link>
    )

    if (style === "addButton") return (
        <button onClick={onClick} className={styles[style]} type={type}>
            <i>{icon}</i>
            <span>
                {children}
            </span>
        </button>
    )

    if (style === "editButton" || style === "deleteButton") {
        const isEditBtn = style === "editButton";
        return (
            <div className={`${styles[style]} h-8 w-[100px] flex justify-center items-center gap-1 rounded-lg px-2 text-white cursor-pointer`}>
                {isEditBtn ? <FaRegEdit /> : <MdDelete className='text-md' />}
                <span>{isEditBtn ? "Düzənlə" : "Sil"}</span>
            </div>
        )
    }

    return (
        <div onClick={onClick} className={styles[style]}>
            {style === "secondary" ? <>
                <FaHeart />{children}
            </> : children}
        </div>
    )
}

export default Button