import React from 'react'

function Label({ style }) {
    const styles = {
        admin: "bg-orange-600",
        manager: "bg-blue-500",
        staff: "bg-green-500"
    }
    return (
        <div className={`${styles[style]} px-2 rounded-xl text-white`}>maneger</div>
    )
}

export default Label