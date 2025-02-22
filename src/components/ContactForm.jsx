import React from 'react'
import Button from './Button'

function ContactForm() {
    return (
        <form className='space-y-5 w-[50%]'>
            <div className='flex items-center gap-5'>
                <div className='flex-grow'>
                    <input placeholder='Adınız və Soyadınız' type="text" className='px-4 py-2 border border-gray-300 rounded-full outline-orange-600 w-full transition duration-400' />
                </div>
                <div className='flex flex-grow gap-2 px-4 focus-within:px-[15px] py-2 focus-within:py-[7px] border border-gray-300 focus-within:border-orange-600 focus-within:border-2 rounded-full transition duration-400' >
                    <select name="" id="" className='outline-none'>
                        <option>050</option>
                        <option>051</option>
                        <option>070</option>
                        <option>077</option>
                        <option>055</option>
                        <option>099</option>
                    </select>
                    <input className='outline-none w-full transition duration-400' type="text" placeholder='Telefon nömrəniz' />
                </div>
            </div>
            <div>
                <input className='px-4 py-2 border border-gray-300 rounded-full outline-orange-600 w-full transition duration-400' type="text" placeholder='Elektron poçtunuz' />
            </div>
            <div>
                <input className='px-4 py-2 border border-gray-300 rounded-full outline-orange-600 w-full transition-all duration-400' type="text" placeholder='Təklif və ya şikayətiniz' />
            </div>
            <Button type="submit" style="fourth">Göndər</Button>
        </form>
    )
}

export default ContactForm