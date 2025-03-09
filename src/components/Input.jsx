import React from 'react'

function Input({ type, style, placeholder }) {
  const styles = {
    primary: "px-4 py-2 border border-gray-300 rounded-full outline-orange-600 w-full transition duration-400",
    secondary: "outline-none w-full transition duration-400",
  }
  return (
    <input className={styles[style]} type={type} placeholder={placeholder} />
  )
}

export default Input